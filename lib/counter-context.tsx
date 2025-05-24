'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from './supabase'

type CounterContextType = {
  clickCount: number
  incrementCount: () => Promise<void>
}

type CatClicksRow = {
  id: string
  count: number
}

const CounterContext = createContext<CounterContextType | undefined>(undefined)

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    // Fetch initial count
    const fetchCount = async () => {
      try {
        const { data, error } = await supabase
          .from('cat_clicks')
          .select('count')
          .single()
        
        if (error) {
          console.error('Failed to load counter:', error)
          return
        }
        
        if (data) {
          setClickCount(data.count)
        }
      } catch (err) {
        console.error('Unexpected error loading counter:', err)
      }
    }
    fetchCount()

    // Subscribe to changes
    const channel = supabase
      .channel('cat_clicks_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'cat_clicks'
        },
        (payload) => {
          if (payload.new) {
            const newData = payload.new as CatClicksRow
            if (typeof newData.count === 'number') {
              setClickCount(Math.max(newData.count, clickCount))
            }
          }
        }
      )
      .subscribe((status) => {
        if (status === 'CHANNEL_ERROR') {
          console.error('Lost connection to counter updates')
        }
      })

    // Cleanup subscription
    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const incrementCount = async () => {
    try {
      // Get current count
      const { data: currentData, error: fetchError } = await supabase
        .from('cat_clicks')
        .select('count')
        .single()

      if (fetchError) {
        console.error('Failed to fetch current count:', fetchError)
        return
      }

      const currentCount = currentData?.count || 0
      const newCount = currentCount + 1
      setClickCount(newCount) // the illusion of an increment

      // Update with incremented count
      const { error: updateError } = await supabase
        .from('cat_clicks')
        .upsert({ id: process.env.NEXT_PUBLIC_SUPABASE_CATCLICK_ID, count: newCount })

      if (updateError) {
        console.error('Failed to update counter:', updateError)
      }
    } catch (err) {
      console.error('Unexpected error updating counter:', err)
    }
  }

  return (
    <CounterContext.Provider value={{ clickCount, incrementCount }}>
      {children}
    </CounterContext.Provider>
  )
}

export function useCounter() {
  const context = useContext(CounterContext)
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider')
  }
  return context
} 
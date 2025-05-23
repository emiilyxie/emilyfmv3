'use client'
import { useState, useCallback, createContext, useContext } from 'react'
import styles from "./page.module.css"
import { Scene, GLTFModel } from "@/components/three"
import React from 'react'

// Create a context for the hover handler
const HoverContext = createContext<((color: string | undefined) => void) | undefined>(undefined);

export function useHover() {
  return useContext(HoverContext);
}

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [modelColor, setModelColor] = useState<string>('black')

  const handleColorChange = useCallback((color: string | undefined) => {
    const newColor = color || 'black';
    setModelColor(newColor);
  }, []);

  return (
    <HoverContext.Provider value={handleColorChange}>
      <div className={styles.container}>
        <div className={styles.canvas}>
          <Scene>
            <GLTFModel 
              key={modelColor}
              path={"/models/cat.glb"} 
              color={modelColor} 
              position={[0,0,0]} 
              scale={2}
            />
          </Scene>
        </div>
        
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </HoverContext.Provider>
  )
}
import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Cutive_Mono } from "next/font/google"

const cutiveMono = Cutive_Mono({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Emily Xie',
  description: 'Just some stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cutiveMono.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

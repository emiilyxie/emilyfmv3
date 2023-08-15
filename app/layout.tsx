import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import { Roboto_Mono } from "next/font/google"

const roboto = Roboto_Mono({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Emily Xie',
  description: 'hi.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

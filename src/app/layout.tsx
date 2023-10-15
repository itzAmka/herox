import Navbar from '$/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Herox',
  description: 'A simple landing page.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <header className="shadow-md">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

import { Syne, Outfit } from 'next/font/google'
import LenisProvider from './components/LenisProvider'
import './globals.css'
import Navbar from './components/Navbar'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['200', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'EEA · NIT Andhra Pradesh',
  description: 'Electrical Engineering Association',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body>
         <Navbar/>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
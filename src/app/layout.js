import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Suspense } from 'react'
import { CartProvider } from '@/components/context/CartContext'
import { AuthProvider } from '@/components/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '¡Que sea rock!',
  description: 'Tienda de rock!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='flex flex-col h-screen bg-slate-100'>
        <AuthProvider>
          <CartProvider>
            <NavBar/>
            <Suspense fallback={<p>Cargando...</p>}>
              {children}
            </Suspense>
            <Footer/>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

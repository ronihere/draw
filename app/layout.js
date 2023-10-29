import { Inter } from 'next/font/google'
import './globals.css'
import Menu from './components/menu/Menu'
import ColorBoard from './components/board/ColorBoard'
import Canvas from './components/canvas/Canvas'
import StoreProvider from '@/store/provider/provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WhiteBoard',
  description: 'WhiteBoard by Roni',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Menu/>
          <ColorBoard />
          <Canvas/>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}

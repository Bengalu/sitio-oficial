import Header from '@/components/header'
import './globals.css'
import Footer from '@/components/footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <body >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

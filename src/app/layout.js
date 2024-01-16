import Header from '@/components/header'
import './globals.css'
import Footer from '@/components/footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Bengalu</title>
        <link rel="shortcut icon" href="svg/bengalu.svg" />
      </head>
      <body >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

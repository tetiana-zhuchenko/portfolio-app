import type { Metadata } from 'next'
import { Montserrat, Inconsolata } from 'next/font/google'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import './globals.css'
import { ThemeContainer } from './components/ThemeContainer/ThemeContainer'
import { GeneralContainer } from './components/GeneralContainer/GeneralContainer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tetiana Zhuchenko/Projects',
  description: 'Portfolio app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inconsolata.variable}`}
    >
      <body>
        <ThemeContainer>
          <GeneralContainer>
            <Header />
            {children}
            <Footer />
          </GeneralContainer>
        </ThemeContainer>
      </body>
    </html>
  )
}

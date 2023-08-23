import './globals.css'
import 'simple-icons-font/font/simple-icons.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from './ui/Navigation'
import { roboto_mono, roboto_mono_bold } from './fonts'
import { Header } from './components/Header'
import { yomogi } from './fonts'

export const metadata: Metadata = {
  title: "tomo0611",
  description: "tomo0611's homepage",
}

// See Document and website structure for more information on the below HTML
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={yomogi.className+" bg-pink-50 text-primary"}>

        {/* Here is our main header that is used across all the pages of our website  */}
        {/* 今回はヘッダーがいらないので削除 */}
        <Header/>

        {/*<nav className={roboto_mono_bold.className+" p-5"}>
          <ul className='flex justify-center text-nav'>
            <Navigation navLinks={[
              { name: 'Home', href: '/' },
              { name: 'Links', href: '/links' },
              { name: 'About me', href: '/about' },
            ]} />
          </ul>
          </nav>*/}

        {/* Here is our page's main content */}
        {children}

        {/* And here is our main footer that is used across all the pages of our website  */}
        <footer className='text-center p-5'>
          <span className='inline-block'>© Copyright 2023 tomo0611.</span> <span className='inline-block'>All Rights Reserved.</span>
        </footer>

      </body>
    </html>
  )
}

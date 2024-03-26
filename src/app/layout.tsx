import './globals.css'
import 'simple-icons-font/font/simple-icons.css'
import type { Metadata } from 'next'
import { Header } from './components/Header'
import { noto_sans } from './fonts'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://tomo0611.dev'),
  title: "tomo0611",
  description: "tomo0611'sの自己紹介サイトへようこそ！",
  generator: 'Next.js',
  applicationName: 'Next.js',
  keywords: ['tomo0611', '大阪公立大学', '情報工学科', 'プログラミング', 'Next.js', 'React', 'JavaScript'],
  creator: 'tomo0611',
  publisher: 'tomo0611',
  openGraph: {
    title: 'tomo0611',
    description: 'tomo0611\'sの自己紹介サイトへようこそ！',
    url: 'https://tomo0611.dev',
    siteName: 'tomo0611.dev',
    locale: 'ja_JP',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
    },
  },
  themeColor: '#fbcfe8',
  twitter: {
    card: 'summary_large_image',
    title: 'tomo0611',
    description: 'tomo0611\'sの自己紹介サイトへようこそ！',
    creator: '@tomo0611_dev',
  },
  verification: {
    other: {
      me: ['tomo0611@hotmail.com', 'tomo0611.dev'],
    },
  },
}

// See Document and website structure for more information on the below HTML
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={noto_sans.className + " bg-pink-50 text-primary"}>

        {/* Here is our main header that is used across all the pages of our website  */}
        {/* 今回はヘッダーがいらないので削除 */}
        <Header />

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
          <span className='inline-block'>© Copyright 2024 tomo0611.</span> <span className='inline-block'>All Rights Reserved.</span>
        </footer>

      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>

        {/* Here is our main header that is used across all the pages of our website  */}

        <header>
          <h1>Header</h1>
        </header>

        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/links">Links</a></li>
            <li><a href="/about">About me</a></li>
          </ul>
        </nav>

        {/* Here is our page's main content */}
        {children}

        {/* And here is our main footer that is used across all the pages of our website  */}
        <footer>
          <p>©2023 tomo0611. All Rights Reserved.</p>
        </footer>

      </body>
    </html>
  )
}

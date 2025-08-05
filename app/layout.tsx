import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boda Vero & Arodi',
  description: 'Boda Vero & Arodi',
  generator: 'Boda Vero & Arodi',
  // Next.js 15 detecta automáticamente favicon.ico, icon.png y apple-icon.png en /app
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.youtube.com/iframe_api"></script>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

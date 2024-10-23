import { AuthContextProvider } from '@providers/auth-provider'
import '@styles/globals.css'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

// const roboto = Roboto({
//   weight: ['100', '300', '400', '500', '700', '900'],
//   subsets: ['latin'],
//   display: 'fallback',
//   variable: '--font-inter'
// })

export const metadata = {
  title: 'Klark',
  description: 'Klark App'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen antialiased`}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  )
}

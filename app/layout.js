import { AuthProvider } from "@providers/auth-provider"
import "@styles/globals.css"
import { Source_Serif_4 } from "next/font/google"
import localFont from "next/font/local"

const monaSans = localFont({
  src: "./fonts/Mona-Sans.woff2",
  variable: "--font-mona-sans",
  weight: "100 900",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
})

export const metadata = {
  title: "Klark",
  description: "Klark App",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`
        ${sourceSerif.variable}
        ${monaSans.variable}
        antialiased  min-h-screen`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

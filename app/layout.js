import "@styles/globals.css"
import { Inter, Source_Serif_4 } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
})

export const metadata = {
  title: "Firebase dashboard",
  description: "Firebase dashboard",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} ${sourceSerif.variable} antialiased  min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
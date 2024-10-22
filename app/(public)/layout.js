import Footer from "@components/layout/footer"
import Header from "@components/layout/header"

export default function Layout({ children }) {
  return (
    <main className='mt-16'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

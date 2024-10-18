import Footer from "@components/layout/footer"
import Header from "@components/layout/header"

export default function layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

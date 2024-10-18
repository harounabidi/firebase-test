import Hero from "@components/hero"

export default function Home() {
  return (
    <main className='flex mt-10 min-h-[100vh] flex-col items-center gap-8 row-start-2 sm:items-start'>
      <Hero />
    </main>
  )
}

import ChevronLeft from "@components/icons/chevron-left"
import Link from "next/link"

export default function page() {
  return (
    <section className='p-10 flex flex-col gap-6 lg:p-36 w-full'>
      <div className='w-full flex md:hidden'>
        <Link
          href='/'
          className='transition-colors border hover:bg-stone-100 rounded-full py-1 px-3'>
          <ChevronLeft color='black' size='30' />
        </Link>
      </div>
      This page is not implemented yet
    </section>
  )
}

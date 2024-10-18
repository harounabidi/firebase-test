import LoadingDots from "@components/icons/loading-dots"

export default function loading() {
  return (
    <div className='w-full h-screen'>
      <div className='flex justify-center items-center h-full'>
        <LoadingDots />
      </div>
    </div>
  )
}

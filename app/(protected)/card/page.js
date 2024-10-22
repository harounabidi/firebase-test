export default function page() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Card</h1>
      <div className="card w-80">
        <div className="card__content relative p-20 text-center font-bold text-white transition-transform duration-1000">
          <div className="card__front absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-pink-600 p-8">
            <h2>Front</h2>
          </div>
          <div className="card__back absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-lg bg-teal-500 p-8">
            <h2>Back</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

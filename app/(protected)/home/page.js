export default function page() {
  return (
    <div>
      <h1>Totla balance</h1>
      <h2 className="text-4xl font-semibold">130$</h2>

      <h2 className="text-xl font-bold">Transactions</h2>

      <ul>
        <li>
          <div className="flex justify-between">
            <p>Payment to John Doe</p>
            <p>20$</p>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <p>Payment to John Doe</p>
            <p>20$</p>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <p>Payment to John Doe</p>
            <p>20$</p>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <p>Payment to John Doe</p>
            <p>20$</p>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <p>Payment to John Doe</p>
            <p>20$</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

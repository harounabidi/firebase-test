export default function page() {
  return (
    <div className="min-h-screen w-full p-10 lg:p-36">
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">About Us</h2>
        <p className="mb-4 text-gray-700">
          Klark is a modern neo bank designed to revolutionize your banking
          experience. We combine cutting-edge technology with user-friendly
          interfaces to provide seamless financial services at your fingertips.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
        <p className="text-gray-700">
          At Klark, our mission is to empower individuals and businesses with
          innovative financial solutions. We strive to make banking accessible,
          transparent, and tailored to the needs of the digital age.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
        <ul className="list-inside list-disc text-gray-700">
          <li>24/7 mobile banking</li>
          <li>Real-time transaction notifications</li>
          <li>Smart budgeting tools</li>
          <li>Competitive interest rates</li>
          <li>No hidden fees</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
        <p className="mb-2 text-gray-700">
          Have questions? We&apos;re here to help!
        </p>
        <p className="text-gray-700">
          Email: support@klarlk.app
          <br />
          Phone: (555) 123-4567
        </p>
      </section>
    </div>
  )
}

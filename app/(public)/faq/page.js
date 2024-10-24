export default function FAQPage() {
  const faqs = [
    {
      question: 'What is a neo bank?',
      answer:
        'A neo bank is a type of direct bank that operates exclusively online without traditional physical branch networks. Klark Neo Bank offers all traditional banking services through digital platforms, providing a more convenient and often more cost-effective banking experience.'
    },
    {
      question: 'How do I open an account with Klark?',
      answer:
        "Opening an account with Klark is easy and can be done entirely online. Simply download our mobile app or visit our website, click on 'Open an Account', and follow the step-by-step instructions. You'll need to provide some personal information and verify your identity."
    },
    {
      question: 'Is my money safe with Klark Neo Bank?',
      answer:
        'Yes, your money is safe with Klark. We are a fully licensed and regulated financial institution. Your deposits are insured up to $250,000 by the FDIC, just like traditional banks.'
    },
    {
      question: 'How can I deposit money into my Klark account?',
      answer:
        'You can deposit money into your Klark account through various methods including direct deposit, mobile check deposit, bank transfers from other accounts, or cash deposits at our partner ATM networks.'
    },
    {
      question: 'What fees does Klark charge?',
      answer:
        'At Klark, we pride ourselves on transparency. We have no monthly maintenance fees, no minimum balance requirements, and no fees for standard online transactions. For a full list of our fees, please visit our Pricing page.'
    }
  ]

  return (
    <div className="min-h-screen w-full p-10 lg:p-36">
      <h1 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <section key={index} className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold">{faq.question}</h2>
          <p className="text-gray-700">{faq.answer}</p>
        </section>
      ))}

      <section className="mt-16">
        <h2 className="mb-4 text-2xl font-semibold">Still have questions?</h2>
        <p className="mb-2 text-gray-700">
          If you couldn&apos;t find the answer you were looking for, please
          don&apos;t hesitate to contact us.
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

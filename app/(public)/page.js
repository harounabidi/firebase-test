'use client'

import Image from 'next/image'
import Link from 'next/link'
import iphone1 from '@/public/images/i1.png'
import iphone2 from '@/public/images/i2.png'
import Check from '@components/icons/check'
import { animated, useSpring, useInView } from '@react-spring/web'
import { useAuthContext } from '@providers/auth-provider'
import Plus from '@components/icons/plus'

export default function Home() {
  const { user } = useAuthContext()

  return (
    <div className="mt-10 flex min-h-screen flex-col items-center gap-8 sm:items-start">
      <HeroSection user={user} />
      <EasySection />
      <MoreSection />
      <FeaturesSection />
      <EasySection />
      <ServicesSection />
      <ProfessionalsSection />
      <EasySection2 />
      <ContactSection />
    </div>
  )
}

function HeroSection({ user }) {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: '0px 0px -10% 0px'
  })

  const springConfig = { mass: 1, tension: 280, friction: 60 }

  const props = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    config: springConfig
  })

  return (
    <animated.section
      ref={ref}
      style={props}
      className="flex w-full flex-col items-center px-6 lg:px-20"
    >
      <h1 className="pb-8 text-center font-inter text-5xl font-black leading-tight md:text-7xl lg:w-2/3">
        Discover new solutions for your business with Klark
      </h1>

      <p className="text-center text-stone-700 lg:max-w-2xl lg:text-xl">
        More than a corporate bank account, a real strategic team mate that your
        business need.
      </p>

      <div className="flex items-center justify-center gap-4">
        {!user && (
          <Link
            href="/signup"
            className="mt-8 flex h-14 items-center justify-center rounded-full bg-stone-900 px-6 font-semibold text-white transition-colors duration-300 hover:bg-stone-700"
          >
            Get started
          </Link>
        )}

        <Link
          href="#contact"
          className="mt-8 flex h-14 items-center justify-center rounded-full border-2 border-stone-900 px-6 font-semibold text-stone-900 transition-colors duration-300 hover:bg-stone-900 hover:text-white"
        >
          Contact us
        </Link>
      </div>
    </animated.section>
  )
}

function EasySection() {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: '0px 0px -10% 0px'
  })

  const springConfig = { mass: 1, tension: 280, friction: 60 }

  const props = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    config: springConfig,
    backgroundImage: "url('/images/gradient.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover'
  })

  return (
    <animated.section
      ref={ref}
      style={props}
      className="my-4 flex w-full flex-col items-center px-6 py-16 md:py-24 lg:px-20"
    >
      <h2 className="pb-8 text-start text-7xl font-black leading-none text-white md:text-center md:text-7xl lg:w-2/3">
        Easy, <span className="text-yellow-400">simple</span> & fast.
      </h2>
      <p className="text-wrap text-xl font-black uppercase text-white">
        5 minutes to onboard
      </p>
    </animated.section>
  )
}

function MoreSection() {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: '0px 0px -10% 0px'
  })

  const springConfig = { mass: 1, tension: 280, friction: 60 }

  const props = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    config: springConfig
  })

  return (
    <animated.section
      ref={ref}
      style={props}
      className="my-4 flex w-full flex-col items-start justify-center gap-8 px-6 lg:flex-row lg:px-20 lg:py-16"
    >
      <h2 className="pb-8 text-start text-5xl font-black leading-tight md:text-7xl lg:w-1/3 lg:text-7xl">
        More than a banking account.
      </h2>
      <p className="border-t-4 border-stone-900 py-14 text-start text-stone-700 lg:w-1/3 lg:max-w-2xl lg:text-xl">
        Klark is your business partner. Not only a banking solution, Klark will
        help you to create and increase your business thanks to the services
        that we propose to you.
      </p>
    </animated.section>
  )
}

function FeaturesSection() {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: '0px 0px -10% 0px'
  })

  const springConfig = { mass: 1, tension: 280, friction: 60 }

  const props = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    config: springConfig
  })

  return (
    <animated.section
      ref={ref}
      style={props}
      className="my-4 flex w-full flex-col items-center gap-4 lg:px-20 lg:py-28"
    >
      <div className="ml-auto flex items-start justify-center gap-4 bg-stone-900 p-6">
        <Plus size="3em" color="white" />
        <h3 className="text-3xl font-bold leading-snug text-white">
          French IBAN, physical and virtual cards in few minutes
        </h3>
      </div>

      <div className="mr-auto flex items-center justify-center gap-4 bg-stone-900 p-6">
        <Check color="white" />
        <h3 className="text-center text-3xl font-medium leading-snug text-white">
          Company legal support and onboarding process
        </h3>
      </div>

      <div className="ml-auto flex items-center justify-center gap-4 bg-stone-900 p-6">
        <Check color="white" />
        <h3 className="text-center text-3xl font-medium leading-snug text-white">
          Leasing solution and split payments for professionals
        </h3>
      </div>

      <div className="mr-auto flex items-center justify-center gap-4 bg-stone-900 p-6">
        <Check color="white" />
        <h3 className="text-center text-3xl font-medium leading-snug text-white">
          A banking application designed for business management
        </h3>
      </div>
    </animated.section>
  )
}

function ServicesSection() {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: '0px 0px -10% 0px'
  })

  const springConfig = { mass: 1, tension: 280, friction: 60 }

  const props = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    config: springConfig
  })

  return (
    <animated.section
      ref={ref}
      style={props}
      className="my-4 flex w-full flex-col items-center pl-6 lg:flex-row lg:py-28 lg:pl-20"
    >
      <div className="flex flex-col items-start justify-center lg:w-1/2">
        <h2 className="pb-8 text-start text-5xl font-black leading-tight md:text-7xl lg:w-1/3 lg:text-7xl">
          Our premium services.
        </h2>

        <ul className="mb-6 list-none space-y-2">
          <li className="flex items-center gap-1">
            <Check />
            French IBAN
          </li>
          <li className="flex items-center gap-1">
            <Check />
            Automatic cashflow estimation
          </li>
          <li className="flex items-center gap-1">
            <Check />
            Lowprice
          </li>
          <li className="flex items-center gap-1">
            <Check /> Support 7/7
          </li>
          <li className="flex items-center gap-1">
            <Check /> Leasing solutions
          </li>
          <li className="flex items-center gap-1">
            <Check /> Capital deposit in 48h
          </li>
          <li className="flex items-center gap-1">
            <Check /> No bank credit
          </li>
          <li className="flex items-center gap-1">
            <Check /> Split payments solution
          </li>
          <li className="flex items-center gap-1">
            <Check /> ApplePay & GooglePay
          </li>
        </ul>

        <h3 className="text-xl font-semibold">
          And all that the traditional bank offers (cards, transfers, direct
          debits)
        </h3>
      </div>
      <div className="relative mt-8 flex justify-center lg:mt-0 lg:w-1/2">
        <Image
          src={iphone2}
          alt="iphone-klark-1"
          width={400}
          height={800}
          className="z-20"
        />
        {/* <div className="absolute right-0 top-1/2 h-96 w-full rounded-l-full bg-stone-800" /> */}
      </div>
    </animated.section>
  )
}

function ProfessionalsSection() {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: '0px 0px -10% 0px'
  })

  const springConfig = { mass: 1, tension: 280, friction: 60 }

  const props = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    config: springConfig
  })

  return (
    <animated.section
      ref={ref}
      style={props}
      className="my-4 flex w-full flex-col-reverse items-center justify-center gap-10 px-6 lg:flex-row lg:px-20 lg:py-28"
    >
      <div className="mt-8 flex justify-center lg:mt-0 lg:w-1/2">
        <Image src={iphone1} alt="iphone-klark-2" width={400} height={800} />
      </div>
      <div className="lg:w-1/2">
        <h2 className="pb-8 text-start text-4xl font-black leading-snug md:text-6xl">
          The bank account for ALL professionals.
        </h2>

        <ul className="mb-6 list-disc space-y-2">
          <li className="flex items-center gap-1">
            <Check />
            E-commerces businesses
          </li>
          <li className="flex items-center gap-1">
            <Check />
            Restaurants
          </li>
          <li className="flex items-center gap-1">
            <Check />
            Traditional businesses
          </li>
          <li className="flex items-center gap-1">
            <Check />
            Entrepreneurs
          </li>
          <li className="flex items-center gap-1">
            <Check />
            Startup tech
          </li>
          <li className="flex items-center gap-1">
            <Check />
            And more !
          </li>
        </ul>

        <h3 className="text-xl font-semibold">
          Klark is made for all the professionals
        </h3>
      </div>
    </animated.section>
  )
}

function EasySection2() {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: '0px 0px -10% 0px'
  })

  const springConfig = { mass: 1, tension: 280, friction: 60 }

  const props = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    config: springConfig
  })

  return (
    <animated.section
      ref={ref}
      style={props}
      className="my-4 flex w-full flex-col items-center bg-gradient-to-br from-black via-black to-pink-600 px-6 py-16 md:py-24 lg:px-20"
    >
      <h2 className="pb-8 text-start text-7xl font-black leading-none text-white md:text-center md:text-7xl lg:w-2/3">
        Easy, <span className="text-cyan-400">simple</span> & fast.
      </h2>
      <p className="text-wrap text-xl font-black uppercase text-white">
        5 minutes to onboard
      </p>
    </animated.section>
  )
}

function ContactSection() {
  const [ref, inView] = useInView({
    once: true,
    rootMargin: '0px 0px -10% 0px'
  })

  const springConfig = { mass: 1, tension: 280, friction: 60 }

  const props = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 40,
    config: springConfig
  })

  return (
    <animated.section
      ref={ref}
      style={props}
      id="contact"
      className="my-4 flex w-full flex-col items-start justify-center px-6 lg:flex-row lg:px-20"
    >
      <div>
        <h2 className="border-b-4 border-stone-900 pb-8 text-start text-5xl font-black leading-tight md:text-7xl lg:w-2/3 lg:text-7xl">
          Let&apos;s keep in touch
        </h2>

        <p className="py-8 text-start text-stone-700 lg:max-w-2xl lg:text-2xl">
          Leave your contact informations here.
        </p>
      </div>

      <form
        className="mt-8 flex w-full max-w-lg flex-col gap-3 lg:mt-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="font-medium" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="h-14 w-full rounded-lg border border-stone-300 px-5"
        />

        <label className="font-medium" htmlFor="company">
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="h-14 w-full rounded-lg border border-stone-300 px-5"
        />

        <label className="font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="h-14 w-full rounded-lg border border-stone-300 px-5"
          required
          type="email"
          name="email"
          id="email"
        />

        <label className="font-medium" htmlFor="message">
          Your message
        </label>
        <textarea
          name="message"
          id="message"
          className="h-32 w-full rounded-lg border border-stone-300 p-5"
        />

        <button className="flex h-14 items-center justify-center rounded-lg bg-stone-900 px-6 font-bold text-white transition-colors duration-300 hover:bg-stone-700">
          Send
        </button>
      </form>
    </animated.section>
  )
}

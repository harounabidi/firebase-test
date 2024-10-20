"use client"

import iphone1 from "@/public/images/i1.png"
import iphone2 from "@/public/images/i2.png"
import Image from "next/image"
import { animated, useSpring, useInView } from "@react-spring/web"
import Link from "next/link"
import { useAuthContext } from "@providers/auth-provider"

export default function Home() {
  const { user } = useAuthContext()

  const [heroRef, heroInView] = useInView({
    once: true,
    rootMargin: "0px 0px -10% 0px",
  })

  const [ctaRef, ctaInView] = useInView({
    once: true,
    rootMargin: "0px 0px -10% 0px",
  })

  const [solutionsRef, solutionsInView] = useInView({
    once: true,
    rootMargin: "0px 0px -10% 0px",
  })

  const [easyRef, easyInView] = useInView({
    once: true,
    rootMargin: "0px 0px -10% 0px",
  })

  const [moreRef, moreInView] = useInView({
    once: true,
    rootMargin: "0px 0px -10% 0px",
  })

  const [servicesRef, servicesInView] = useInView({
    once: true,
    rootMargin: "0px 0px -10% 0px",
  })

  const [professionalsRef, professionalsInView] = useInView({
    once: true,
    rootMargin: "0px 0px -10% 0px",
  })

  const springConfig = { mass: 1, tension: 280, friction: 60 }

  const heroProps = useSpring({
    opacity: heroInView ? 1 : 0,
    y: heroInView ? 0 : 20,
    config: springConfig,
  })

  const ctaProps = useSpring({
    opacity: ctaInView ? 1 : 0,
    y: ctaInView ? 0 : 20,
    config: springConfig,
  })

  const solutionsProps = useSpring({
    opacity: solutionsInView ? 1 : 0,
    y: solutionsInView ? 0 : 20,
    config: springConfig,
  })

  const easyProps = useSpring({
    opacity: easyInView ? 1 : 0,
    y: easyInView ? 0 : 20,
    config: springConfig,
  })

  const moreProps = useSpring({
    opacity: moreInView ? 1 : 0,
    y: moreInView ? 0 : 20,
    config: springConfig,
  })

  const servicesProps = useSpring({
    opacity: servicesInView ? 1 : 0,
    y: servicesInView ? 0 : 20,
    config: springConfig,
  })

  const professionalsProps = useSpring({
    opacity: professionalsInView ? 1 : 0,
    y: professionalsInView ? 0 : 20,
    config: springConfig,
  })

  return (
    <main className='flex mt-10 min-h-screen flex-col items-center gap-8 sm:items-start'>
      <animated.section
        ref={heroRef}
        style={heroProps}
        className='lg:px-20 px-6 items-center w-full flex flex-col'>
        <span className='bg-pink-200 font-semibold font-source px-3.5 py-1.5 rounded-full'>
          Trusted by over 1 million customers
        </span>

        <h1 className='font-source font-medium leading-snug lg:w-2/3 text-5xl md:text-7xl py-8 text-center'>
          Discover new solutions for your business with Klark
        </h1>

        <p className='text-center font-mona lg:text-xl font-semibold lg:max-w-2xl text-stone-900'>
          Experience seamless, secure, and smart banking right from your
          smartphone. No branches, no queues, just effortless financial
          management.
        </p>

        {!user && (
          <Link
            href='/signup'
            className='bg-stone-900 mt-8 text-white font-semibold hover:bg-stone-700 rounded-full h-14 px-6 transition-colors duration-300 flex items-center justify-center'>
            Get started
          </Link>
        )}
      </animated.section>

      <animated.section
        ref={ctaRef}
        style={ctaProps}
        className='lg:px-20 my-4 py-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 items-center w-full flex flex-col'>
        <h2 className='font-source text-white font-medium leading-snug lg:w-2/3 text-5xl md:text-7xl pb-8 text-center'>
          Easy, simple & fast.
        </h2>
        <p className='text-wrap text-white font-black text-xl'>
          5 minutes to onboard
        </p>
      </animated.section>

      <animated.section
        ref={solutionsRef}
        style={solutionsProps}
        className='px-6 lg:px-20 my-4 lg:py-16 items-center w-full flex flex-col lg:flex-row'>
        <h2 className='font-source font-medium leading-snug lg:w-2/3 text-5xl md:text-7xl pb-8 text-start'>
          More than a banking account.
        </h2>
        <p className='text-start font-mona lg:text-xl font-semibold lg:max-w-2xl text-stone-900'>
          Klark is your business partner. Not only a banking solution, Klark
          will help you to create and increase your business thanks to the
          services that we propose to you.
        </p>
      </animated.section>

      <animated.section
        ref={moreRef}
        style={moreProps}
        className='px-6 lg:px-20 my-4 lg:py-28 items-center w-full flex flex-col'>
        <h3 className='font-source font-medium leading-snug text-4xl md:text-6xl pb-8 text-center'>
          French IBAN, physical and virtual cards in few minutes
        </h3>
        <h3 className='font-source font-medium leading-snug text-4xl md:text-6xl pb-8 text-center'>
          Company legal support and onboarding process
        </h3>
        <h3 className='font-source font-medium leading-snug text-4xl md:text-6xl pb-8 text-center'>
          Leasing solution and split payments for professionals
        </h3>
        <h3 className='font-source font-medium leading-snug text-4xl md:text-6xl pb-8 text-center'>
          A banking application designed for business management
        </h3>
      </animated.section>

      <animated.section
        ref={easyRef}
        style={easyProps}
        className='lg:px-20 my-4 py-28 bg-gradient-to-r from-yellow-950 via-purple-500 to-pink-500 px-6 items-center w-full flex flex-col'>
        <h2 className='font-source text-white font-medium leading-snug lg:w-2/3 text-5xl md:text-7xl pb-8 text-center'>
          Easy, simple & fast.
        </h2>
        <p className='text-wrap text-white font-black text-xl'>
          5 minutes to onboard
        </p>
      </animated.section>

      <animated.section
        ref={servicesRef}
        style={servicesProps}
        className='px-6 lg:px-20 my-4 lg:py-28 items-center w-full flex flex-col lg:flex-row'>
        <div className='flex flex-col items-center justify-center lg:w-1/2'>
          <h2 className='font-source font-medium leading-snug text-4xl md:text-6xl pb-8 text-start'>
            Our premium services.
          </h2>

          <ul className='list-disc pl-5 space-y-2 mb-6'>
            <li>French IBAN</li>
            <li>Automatic cashflow estimation</li>
            <li>Lowprice</li>
            <li>Support 7/7</li>
            <li>Leasing solutions</li>
            <li>Capital deposit in 48h</li>
            <li>No bank credit</li>
            <li>Split payments solution</li>
            <li>ApplePay & GooglePay</li>
          </ul>

          <h3 className='text-xl font-semibold'>
            And all that the traditional bank offers (cards, transfers, direct
            debits)
          </h3>
        </div>
        <div className='lg:w-1/2 flex justify-center mt-8 lg:mt-0'>
          <Image src={iphone1} alt='iphone-klark-1' width={400} height={800} />
        </div>
      </animated.section>

      <animated.section
        ref={professionalsRef}
        style={professionalsProps}
        className='px-6 gap-10 lg:px-20 my-4 lg:py-28 items-center w-full flex flex-col justify-center lg:flex-row'>
        <div className='lg:w-1/2'>
          <h2 className='font-source font-medium leading-snug text-4xl md:text-6xl pb-8 text-start'>
            The bank account for ALL professionals.
          </h2>

          <ul className='list-disc pl-5 space-y-2 mb-6'>
            <li>E-commerces businesses</li>
            <li>Restaurants</li>
            <li>Traditional businesses</li>
            <li>Entrepreneurs</li>
            <li>Startup tech</li>
            <li>And more !</li>
          </ul>

          <h3 className='text-xl font-semibold'>
            Klark is made for all the professionals
          </h3>
        </div>
        <div className='lg:w-1/2 flex justify-center mt-8 lg:mt-0'>
          <Image src={iphone2} alt='iphone-klark-2' width={400} height={800} />
        </div>
      </animated.section>
    </main>
  )
}

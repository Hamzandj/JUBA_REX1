import React from 'react'

import { generalInfo } from '@/data'
import { Button } from '@/components/ui/button'
import Orbits from '@/components/shared/orbits'

import MotionSection from '@/components/shared/motion-section'
import Link from 'next/link'



const Home = () => {
  return (
    <section
      className='relative'>

      <MotionSection
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className='z-10 relative container flex flex-col justify-center items-center text-center lg:text-start lg:items-start h-[calc(100vh-60px)] lg:h-screen'>
        {/* Hero Conetent  */}
        <article className='mb-8 flex flex-col gap-y-2 lg:gap-y-4'>
          <h3 className='font-jetbrains font-medium text-base lg:text-lg'>protect Your Ancient Treasures with juba Rex.</h3>
          <h1 className='font-bold text-3xl lg:text-5xl'>Safegurding & Digizing  </h1>
          <h1 className='font-bold text-3xl lg:text-5xl'><span className='text-[#FFB800]'>Ancient Treasures</span></h1>
        </article>

        {/* Hero Intro */}
        <p className='text-sm lg:text-base lg:mr-[40%]' >protect Your Ancient Treasures with juba Rex. our Services Not Only Secure Physical Pieces But Also Digitally Preserve Theme For Generation To Come.</p>

        {/* CTA Buttons  */}
        <div className='flex justify-center items-center gap-x-4 mt-8 lg:mt-12'>


            <Button size='lg'>
              <p className='font-semibold text-base lg:text-lg'>Watch Video</p>
            </Button>


            <Button variant='secondary' size='lg'>
              <p className='font-semibold text-base lg:text-lg'>Our Categories</p>
            </Button>

        </div>
    
      </MotionSection>

      <Orbits mini={false} />

    </section>
  )
}

export default Home
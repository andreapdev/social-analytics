import Image from 'next/image'
import * as React from 'react'

export const Hero = function Hero() {

  return (
    <div className='flex justify-center items-center relative'>
      <Image priority src="/img/home/particles.gif" alt="" width="1200" height="1200"
            className='relative w-screen h-auto opacity-40 object-cover min-h-screen' />
      <div className='absolute text-3xl lg:text-5xl p-5 top-1/4 flex items-baseline justify-center flex-wrap m-auto gap-5 drop-shadow-custom'>
        <h2>
          WELCOME TO
        </h2>
        <Image priority src="/img/logos/camaleonic-logo.png" alt="Camaleonic Analytics" width="200" height="200"
          className='w-60 lg:w-80' />
      </div>
    </div>
  )
}
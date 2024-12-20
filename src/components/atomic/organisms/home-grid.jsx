"use client"

import Image from 'next/image';
import { React, useEffect } from 'react';
import animateOnViewport from '@/utils/animate-on-viewport';

export function HomeGrid() {
  useEffect(() => {
    const elements = document.querySelectorAll('.js-home-grid-item');
    elements.forEach((element) => {
      animateOnViewport(element);
    })
  }, [])

  return (
    <div className="home-grid relative z-10 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-5 w-screen p-5">
        <div className="js-home-grid-item lg:col-span-2 bg-white/5 p-5 fade-in-from-left" data-animation="fade-in-animation">
          Real time data analysis to improve decision making
        </div>
        <div className="js-home-grid-item lg:col-start-3 flex justify-center items-center fade-in-from-right" data-animation="fade-in-animation">
          <Image src='/img/home/placeholder.jpg' alt='' width='100' height='100'
            className='h-full w-auto' />
        </div>
        <div className="js-home-grid-item row-start-4 lg:row-start-2 flex justify-center items-center fade-in-from-left" data-animation="fade-in-animation">
          <Image src='/img/home/placeholder.jpg' alt='' width='100' height='100'
           className='h-full w-auto' />
        </div>
        <div className="js-home-grid-item lg:col-span-2 lg:row-start-2 bg-white/5 p-5 fade-in-from-right" data-animation="fade-in-animation">
          <p>Monitor & optimize your social network media presence.</p>
          <p>Know how your followers interact with your account or any other.</p>
          <p>Know the engagement & the economic value of your posts.</p>
        </div>
        <div className="js-home-grid-item lg:col-span-2 lg:row-start-3 bg-white/5 p-5 fade-in-from-left" data-animation="fade-in-animation">
          Excellence is our base. Technology our strength. Transparency our objective. Changing the market our goal.
        </div>
        <div className="js-home-grid-item lg:col-start-3 lg:row-start-3 flex justify-center items-center fade-in-from-right" data-animation="fade-in-animation">
          <Image src='/img/home/placeholder.jpg' alt='' width='100' height='100'
           className='h-full w-auto' />
        </div>
    </div>
  );
};

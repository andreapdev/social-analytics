"use client"

import Image from 'next/image';
import { React, useEffect } from 'react';
import animateOnViewport from '@/utils/animate-on-viewport';
import Card from '../atoms/card';

export function HomeGrid() {
  useEffect(() => {
    const elements = document.querySelectorAll('.js-home-grid-item');
    elements.forEach((element) => {
      animateOnViewport(element);
    })
  }, [])

  return (
    <div className="home-grid relative z-10 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 gap-5 lg:gap-16 w-screen p-5 lg:p-20">
      <Card extraClass="p-10 text-2xl flex justify-center flex-col js-home-grid-item fade-in-from-left lg:col-span-2" dataAnimation='fade-in-animation'>
        <p>Monitor & optimize your social network media presence.</p>
        <p>Know how your followers interact with your account or any other.</p>
        <p>Know the engagement & the economic value of your posts.</p>
      </Card>
      <div className="js-home-grid-item lg:col-start-3 flex justify-center items-center fade-in-from-right" data-animation="fade-in-animation">
        <Image src='/img/home/data.jpg' alt='' width='256' height='171'
          className='w-full min-h-full object-cover rounded-md' />
          <div className="counter-animation" data-count={33}></div>
      </div>

      <div className="js-home-grid-item row-start-4 lg:row-start-2 flex justify-center items-center fade-in-from-left" data-animation="fade-in-animation">
        <Image src='/img/home/ai.jpg' alt='' width='256' height='171'
          className='w-full min-h-full object-cover rounded-md' />
      </div>

      <Card extraClass="p-10 text-2xl flex justify-center flex-col js-home-grid-item lg:col-span-2 lg:row-start-2 fade-in-from-right" dataAnimation='fade-in-animation'>
        <p>Excellence is our base.</p>
        <p>Technology our strength.</p>
        <p>Transparency our objective.</p>
        <p>Changing the market our goal.</p>
      </Card>

      <Card extraClass="p-10 text-2xl flex justify-center flex-col js-home-grid-item lg:col-span-2 lg:row-start-3 fade-in-from-left" dataAnimation='fade-in-animation'>
        <p>Make data-based decisions and get the best results.</p>
        <p>Knowledge is power. Use it.</p>
      </Card>

      <div className="js-home-grid-item lg:col-start-3 lg:row-start-3 flex justify-center items-center fade-in-from-right" data-animation="fade-in-animation">
        <Image src='/img/home/growth.jpg' alt='' width='256' height='171'
          className='w-full min-h-full object-cover rounded-md object-right' />
      </div>
    </div>
  );
};

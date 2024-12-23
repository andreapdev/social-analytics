import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-secondary p-5 bottom-0 w-100'>
      <div className='flex justify-between items-end gap-5'>
        <Image src='/img/logos/camaleonic-logo.png' width='256' height='109'  className='w-40'
        alt='Camaleonic Analytics Logo' />
        <p className='text-xs'>&copy; {new Date().getFullYear()} by Andrea Penso. Using NextJS</p>
      </div>
    </footer>
  );
};

export default Footer;
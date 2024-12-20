import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-secondary p-5 bottom-0 w-screen'>
      <div>
        <Image src='/img/logos/camaleonic-logo.png' width='100' height='50' alt='Camaleonic Analytics Logo' />
        <p>&copy; {new Date().getFullYear()} by Andrea Penso. Using NextJS</p>
      </div>
    </footer>
  );
};

export default Footer;
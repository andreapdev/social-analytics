"use client"

import * as React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = function Navbar() {
  return (
    <nav className='sticky top-0 w-full flex justify-evenly items-center p-2.5 bg-black bg-opacity-75 z-50'>
      <NavbarItem url="/" text="Home" icon="home" />
      <NavbarItem url="/dashboard" text="Dashboard" icon="bar_chart" />
      <NavbarItem url="/tables" text="Tables" icon="table_chart" />
    </nav>
  )
}

const NavbarItem = function NavbarItem({ url, text, icon }) {
  const pathname = usePathname();
  const extraClassName = pathname == url ? 'text-primary' : ''  

  return (
    <Link href={url} 
      className={`p-2.5 rounded-full hover:bg-secondary flex flex-col items-center w-16 lg:w-32 ${extraClassName}`}>
      <i className='material-symbols-outlined'>{icon}</i>
      {text}
    </Link>
  )
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { CgClose, CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', link: '/' },
    { name: 'Servicios', link: '/servicios' },
    { name: 'Sobre Nosotros', link: '/' },
    { name: 'Contactanos', link: '/contacto' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  return (
    <>
      <nav className='flex items-center justify-between w-full h-20 px-10 bg-transparent text-gray-600 z-30 shadow mb-2'>
        <div>LOGO</div>
        <button className='md:hidden z-30' onClick={toggleMenu}>{isOpen ? <CgClose className='text-3xl' /> : <CgMenuRightAlt className='text-3xl' />}</button>
        <ul className={`flex flex-col md:flex-row items-center justify-center md:justify-end gap-5 fixed md:relative ${isOpen ? 'inset-0' : '-top-full'} left-0 w-full min-h-screen md:min-h-0 md:top-0 bg-white z-20 transition-all duration-300`}>
          {links?.map((link, index) => (
            <li key={index}>
              <Link className='block text-5xl md:text-2xl tracking-wider p-5 md:p-0 ' to={link.link} onClick={closeMenu}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;


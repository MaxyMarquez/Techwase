import React from 'react'

import { RiFacebookLine, RiInstagramLine, RiTwitterXLine, RiLinkedinLine } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <section className='flex justify-center items-center flex-col mt-5'>
        <form action="" className='relative w-full md:w-[80%] px-10 mb-28'>
          <div className='flex justify-start w-full mb-2 mt-4'>
            <h1 className='text-4xl md:text-6xl text-gray-800 tracking-wider'>Contacto</h1>
          </div>
          <div className='md:flex gap-5 my-4'>
            <div className='flex flex-col w-full mt-4 md:m-1'>
              <label className='text-xl md:text-2xl tracking-wider text-gray-800'>Nombre</label>
              <input className='py-4 pl-5 text-gray-800 border-b-2 border-b-dark-blue w-full text-xs md:text-sm outline-none tracking-wider' type="text" placeholder='Escribe tu Nombre' />
            </div>
            <div className='flex flex-col w-full mt-4 md:m-1'>
              <label className='text-xl md:text-2xl tracking-wider text-gray-800'>Apellido</label>
              <input className='py-4 pl-5 text-gray-800 border-b-2 border-b-dark-blue w-full text-xs md:text-sm outline-none tracking-wider' type="text" placeholder='Escribe tu Apellido' />
            </div>
          </div>
          <div className='md:flex md:w-full gap-5 my-4'>
            <div className='flex flex-col w-full mt-4 md:m-1'>
              <label className='text-xl md:text-2xl tracking-wider text-gray-800'>Correo Electrónico</label>
              <input className='py-4 pl-5 text-gray-800 border-b-2 border-b-dark-blue w-full text-xs md:text-sm outline-none tracking-wider' type="text" placeholder='Escribe tu correo' />
            </div>
            <div className='flex flex-col w-full mt-4 md:m-1'>
              <label className='text-xl md:text-2xl tracking-wider text-gray-800'>Teléfono</label>
              <input className='py-4 pl-5 text-gray-800 border-b-2 border-b-dark-blue w-full text-xs md:text-sm outline-none tracking-wider' type="text" placeholder='Escribe tu teléfono' />
            </div>
          </div>
          <div className='flex flex-col p-1 mt-4 '>
            <label className='text-xl md:text-2xl tracking-wider text-gray-800 '>Mensaje</label>
            <textarea className='w-full h-40 resize-none border-2 border-dark-blue py-4 px-5 outline-none mt-4' name="" id="" placeholder='Escribe tu mensaje'></textarea>
          </div>

          <div className="group absolute -bottom-14 right-0 flex items-center justify-end mt-5 pr-10">
            <button className='flex items-center gap-2 py-1 pr-1 text-xl md:text-2xl text-dark-blue border-b border-dark-blue' type='submit'>
              Enviar
              <span className='h-[2px] w-10 mt-1 bg-dark-blue group-hover:w-14 transition-all ease-in-out duration-300  '></span>
            </button>
          </div>
        </form>

        <div className='md:flex md:h-screen w-full'>
          <div className='flex items-start justify-center flex-col w-full bg-gray-200 p-5 md:p-10'>
            <div className=''>
              <h2 className='block mb-5 text-2xl sm:text-3xl md:text-5xl text-gray-800 tracking-wider underline'>Teléfono</h2>
              <a className='text-2xl md:text-3xl text-dark-blue tracking-wider' href="tel:+544123082432">+54 412 308 2432</a>
            </div>
            <div className='md:mt-5'>
              <h2 className='block mb-5 text-2xl sm:text-3xl md:text-5xl text-gray-800 tracking-wider mt-5 underline'>Correo Electronico</h2>
              <a className='text-xl sm:text-2xl md:text-3xl text-dark-blue tracking-wider' href="">alexander20012@hotmail.com</a>
            </div>

            <div className='md:mt-5'>
              <h2 className='text-2xl sm:text-3xl md:text-5xl block mb-5 text-gray-800 tracking-wider mt-5 underline'>Seguinos</h2>
              <div className='flex gap-2'>
                <a className='flex items-center justify-center w-10 md:w-14 h-10 md:h-14 border border-gray-700 rounded-full' href=''>
                  <RiFacebookLine className='text-xl md:text-4xl' />
                </a>
                <a className='flex items-center justify-center w-10 md:w-14 h-10 md:h-14 border border-gray-700 rounded-full' href=''>
                  <RiInstagramLine className='text-xl md:text-4xl' />
                </a>
                <a className='flex items-center justify-center w-10 md:w-14 h-10 md:h-14 border border-gray-700 rounded-full' href=''>
                  <RiTwitterXLine className='text-xl md:text-4xl' />
                </a>
                <a className='flex items-center justify-center w-10 md:w-14 h-10 md:h-14 border border-gray-700 rounded-full' href=''>
                  <RiLinkedinLine className='text-xl md:text-4xl' />
                </a>
              </div>
            </div>
          </div>
          <div className='w-full bg-red-700'>

          </div>
        </div>

      </section >
    </>
  )
}

export default Contact
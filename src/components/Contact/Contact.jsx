import React, { useState } from 'react'

import { PhoneInput } from 'react-international-phone';

import contact from '../../assets/contact.jpg'

import './styles.css'
import 'react-international-phone/style.css';

// Icons
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  const [phone, setPhone] = useState('');
  return (
    <>
      <section className='flex justify-center items-center flex-col'>
        <div className="bg-white relative">

          <h1 className='text-4xl md:text-6xl text-gray-800 text-center tracking-wider mt-10'>Contactanos</h1>
          <div className="flex flex-col items-center justify-between pt-0 pb-0 mt-0 mr-auto mb-0 ml-auto
       lg:flex-row">
            <div className="flex flex-col-reverse items-center w-full object-cover pt-5 lg:flex-row">
              <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                <div className="flex flex-col items-center justify-center w-full relative">
                  <img src={contact} className="w-full h-full" />
                </div>
              </div>
              <div class="w-full p-5 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                <div class="flex flex-col items-start justify-start p-5 bg-white shadow-2xl rounded-xl
            relative z-10">
                  <div className='p-5'>
                    <h1 className='text-xl mb-2'>Seguinos</h1>
                    <div className='flex gap-4'>
                      <a href="">
                        <FaFacebook className='text-2xl text-gray-500' />
                      </a>
                      <a href="">
                        <FaTwitter className='text-2xl text-gray-500' />
                      </a>
                      <a href="">
                        <FaInstagram className='text-2xl text-gray-500' />
                      </a>
                      <a href="">
                        <FaLinkedinIn className='text-2xl text-gray-500' />
                      </a>
                    </div>
                  </div>
                  <div className='p-5'>
                    <h1 className='text-xl mb-2'>Teléfono</h1>
                    <a href='tel:+544123082432' className='text-2xl text-gray-500'>+54 412 308 2432</a>
                  </div>
                  <div className='p-5'>
                    <h1 className='text-xl mb-2'>Mail</h1>
                    <a href='' className='text-2xl text-gray-500'>alexander20012@hotmail.com</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <form action="" className='relative w-full md:w-[80%] pt-0 pb-10 px-10'>
          <div className='flex justify-start w-full mb-10'>
            <h1 className='text-4xl md:text-6xl text-gray-800 text-center tracking-wider'>¿En qué podemos ayudarte?</h1>
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
              <PhoneInput
                className='pt-4 pl-5 text-gray-800 border-b-2 border-b-dark-blue w-full !font-extralight'
                inputClassName='!border-none w-full !pb-4 !text-xs md:!text-sm tracking-wider font-extralight'
                defaultCountry="ar"
                disableDialCodeAndPrefix={true}
                showDisabledDialCodeAndPrefix={true}
                disableFormatting={true}
                countrySelectorStyleProps={
                  { buttonClassName: "!pb-4 text-gray-800 border-none w-full !tracking-wider hover:bg-transparent" }

                }
                dialCodePreviewStyleProps={
                  { className: '!pb-4 text-gray-800 border-none !text-xs md:!text-sm !tracking-wider' }
                }
                placeholder='Escribe tu número de teléfono'
              />
              {/* <input className='py-4 pl-5 text-gray-800 border-b-2 border-b-dark-blue w-full text-xs md:text-sm outline-none tracking-wider' type="text" placeholder='Escribe tu teléfono' /> */}
            </div>
          </div>
          <div className='flex flex-col mt-4 '>
            <label className='text-xl md:text-2xl tracking-wider text-gray-800 '>Asunto</label>
            <input className='py-4 pl-5 text-gray-800 border-b-2 border-b-dark-blue w-full text-xs md:text-sm outline-none tracking-wider' type="text" placeholder='Escribe el asunto del mensaje' />
          </div>
          <div className='flex flex-col mt-4 '>
            <label className='text-xl md:text-2xl tracking-wider text-gray-800 '>Mensaje</label>
            <textarea className='w-full h-40 resize-none border-2 border-dark-blue py-4 px-5 outline-none mt-4' name="" id="" placeholder='Escribe tu mensaje'></textarea>
          </div>


          <div className="flex items-center justify-end mt-5">
            <button
              className='group relative w-full md:w-auto inline-block overflow-hidden border border-dark-blue bg-dark-blue text-3xl font-medium tracking-wider px-12 py-3  text-white focus:outline-none transition-all duration-200' type='submit'>
              <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-white transition-all duration-300 group-hover:w-full"></span>
              <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-white transition-all duration-300 group-hover:h-full"></span>
              <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-300 group-hover:w-full"></span>
              <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-white transition-all duration-300 group-hover:h-full"></span>
              Enviar
            </button>

          </div>
        </form>

      </section >
    </>
  )
}

export default Contact
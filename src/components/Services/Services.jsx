import React from 'react'
import img1 from '../../assets/img1.png'

const Services = () => {
  return (
    <>
      <section className='flex flex-col'>
        <article className='flex flex-col md:flex-row items-center justify-center h-screen w-full'>
          <div className='flex flex-col justify-center p-16 text-wrap h-full w-full'>
            <h1 className='text-5xl py-6'>Desarrollo de Páginas Web</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloribus. Corrupti voluptatem optio labore doloremque earum, eius delectus, natus doloribus quo sunt, temporibus nihil quidem obcaecati vero modi accusamus saepe!</p>
          </div>
          <picture className='p-16 h-full w-full'>
            <img src={img1} alt="" />
          </picture>
        </article>

        <article className='flex flex-col md:flex-row-reverse items-center justify-center h-screen w-full'>
          <div className='flex flex-col justify-center p-16 text-wrap h-full w-full'>
            <h1 className='text-5xl py-6'>Desarrollo de Páginas Web</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloribus. Corrupti voluptatem optio labore doloremque earum, eius delectus, natus doloribus quo sunt, temporibus nihil quidem obcaecati vero modi accusamus saepe!</p>
          </div>
          <picture className='p-16 h-full w-full'>
            <img src={img1} alt="" />
          </picture>
        </article>

        <article className='flex flex-col md:flex-row items-center justify-center h-screen w-full'>
          <div className='flex flex-col justify-center p-16 text-wrap h-full w-full'>
            <h1 className='text-5xl py-6'>Desarrollo de Páginas Web</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloribus. Corrupti voluptatem optio labore doloremque earum, eius delectus, natus doloribus quo sunt, temporibus nihil quidem obcaecati vero modi accusamus saepe!</p>
          </div>
          <picture className='p-16 h-full w-full'>
            <img src={img1} alt="" />
          </picture>
        </article>

        <article className='flex flex-col md:flex-row-reverse items-center justify-center h-screen w-full'>
          <div className='flex flex-col justify-center p-16 text-wrap h-full w-full'>
            <h1 className='text-5xl py-6'>Desarrollo de Páginas Web</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloribus. Corrupti voluptatem optio labore doloremque earum, eius delectus, natus doloribus quo sunt, temporibus nihil quidem obcaecati vero modi accusamus saepe!</p>
          </div>
          <picture className='p-16 h-full w-full'>
            <img src={img1} alt="" />
          </picture>
        </article>

      </section>
    </>
  )
}

export default Services
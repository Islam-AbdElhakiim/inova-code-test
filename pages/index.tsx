import Filter from '@/components/Filter';
import React, { useEffect, useState } from 'react';

export default function Home(props: any) {
  return (
    <section className=' max-w-[60%] mx-auto p-3 text-white mt-10 font-bold'>
      <h2 className='text-3xl'>
       E-books
      </h2>
  
      <Filter />

    </section>
  )
}

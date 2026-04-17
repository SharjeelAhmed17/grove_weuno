import About from '@/components/home/About'
import Banner from '@/components/home/Banner'
import Contact from '@/components/home/Contact'
import Experiences from '@/components/home/Experiences'
import GeneralAccess from '@/components/home/GeneralAccess'
import ResturantGrid from '@/components/home/ResturantGrid'
import React from 'react'

export default function page() {
  return (
    <div className=' w-full'>
      <Banner/>
      <About/>
      <GeneralAccess/>
      <ResturantGrid/>
      <Experiences/>
      <Contact/>
    </div>
  )
}

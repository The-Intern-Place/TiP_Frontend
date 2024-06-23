
import HiringLayout from '@/partials/companieshiring/HiringLayout';
import  type { Metadata } from 'next'
import React from 'react'



export const metadata: Metadata ={
  title: "The Intern Place | Hiring Comapny",
  description: "The Intern Place",
};


const page = () => {
  return (
    <HiringLayout />
  )
}

export default page
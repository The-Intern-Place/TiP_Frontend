import Hiring from '@/partials/companieshiring/hiringLayout'
import  type { Metadata } from 'next'
import React from 'react'



export const metadata: Metadata ={
  title: "The Intern Place | Hiring Comapny",
  description: "The Intern Place",
};


const page = () => {
  return (
    <Hiring />
  )
}

export default page
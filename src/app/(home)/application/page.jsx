import { ApplicationComponent } from '@/components/ApplicationComponent'
import { connectDb } from '@/lib/connectDb';
import { Content } from '@/models/Content';
import React from 'react'

export const revalidate = 60

const page = async () => {
    await connectDb();
    const data = await Content.findOne()
  return (
   <ApplicationComponent 
    applyLink={JSON.parse(JSON.stringify(data.apply_link))}
   />
  )
}

export default page

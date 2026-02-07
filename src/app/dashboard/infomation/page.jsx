import React from 'react'
import InfomationForm from '../(components)/InfomationForm'
import { Content } from '@/models/Content'
import { connectDb } from '@/lib/connectDb'

const informationPage = async () => {
   await connectDb()
      const data = await Content.findOne()
  return (
    <div><InfomationForm  data={JSON.parse(JSON.stringify(data.information))} /></div>
  )
}

export default informationPage
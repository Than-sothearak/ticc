import React from 'react'
import { connectDb } from '@/lib/connectDb'
import { Content } from '@/models/Content'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { ImageSliderForm } from '../(components)/information-form/ImageSliderForm'
import ApplicationForm from '../(components)/application-form/ApplicationForm'

const cmsPage = async () => {

    await connectDb()
    const data = await Content.findOne()
    
  return (
    <div className='mt-8 lg:px-16 px-2 space-y-6'>
      <ApplicationForm data={JSON.parse(JSON.stringify(data.apply_link))}/>

          <Card className="md:w-[580px] w-full m-auto">
              <CardHeader>
                <CardTitle>Add Image slider</CardTitle>
              </CardHeader>
            <ImageSliderForm data={JSON.parse(JSON.stringify(data))}/>

            </Card>
    </div>
  )
}

export default cmsPage
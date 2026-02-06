import React from 'react'
import ApplyLinkForm from '../(components)/ApplyLinkForm'
import { ImageSliderForm } from '../(components)/ImageSliderForm'
import { connectDb } from '@/lib/connectDb'
import { Content } from '@/models/Content'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const cmsPage = async () => {

    await connectDb()
    const data = await Content.findOne()
    
  return (
    <div className='w-full m-auto space-y-6'>
      <ApplyLinkForm data={JSON.parse(JSON.stringify(data.apply_link))}/>

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
export const dynamic = "force-dynamic";
import { connectDb } from '@/lib/connectDb'
import { Event } from '@/models/Event'
import React from 'react'
import EventForm from '../../(components)/event-form/EventForm'
import { EventImageForm } from '../../(components)/event-form/EventImageForm'
import { EventPrototypeForm } from '../../(components)/event-form/EventPrototype'

const singleEventPage = async ({params}) => {
 await connectDb()
 const event = await Event.findById({_id: params.id}).lean();
 if (!event) {
  return (
     <div>In valid id</div>
  )
 
 }
  return (
    <div className='container my-4'>
      <EventForm data={JSON.parse(JSON.stringify(event))} />
      {event && (
       <div>
         <EventImageForm data={JSON.parse(JSON.stringify(event))}/>
        <EventPrototypeForm data={JSON.parse(JSON.stringify(event))}/>
       </div>
      )}
    </div>
  )
}

export default singleEventPage

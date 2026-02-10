import React from 'react'
import EventForm from '../../(components)/event-form/EventForm'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


const addEventPage = async ({data}) => {
    const session = await getServerSession(authOptions);

  return (
    <div className='container py-4'>
      <EventForm session={session}/>
    </div>
  )
}

export default addEventPage
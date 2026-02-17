import { MentorComponent } from '@/components/MentorComponent'
import { connectDb } from '@/lib/connectDb'
import { Mentor } from '@/models/Mentor'
import React from 'react'

export const revalidate = 60

const mentorPage = async () => {
  await connectDb()
    const mentorsByYear = await Mentor.aggregate([
    {
      $group: {
        _id: "$year",
        mentors: {
          $push: {
            _id: "$_id",
            name: "$name",
            title: "$title",
            image: "$image",
          },
        },
      },
    },
    { $sort: { _id: -1 } },
  ]);
  return (
    <div>
      <MentorComponent data={JSON.parse(JSON.stringify(mentorsByYear))} />
    </div>
  )
}

export default mentorPage
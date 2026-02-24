import FqaComponent from '@/components/fqa-page/FqaComponent'
import { connectDb } from '@/lib/connectDb'
import { Fqa } from '@/models/Fqa'
import React from 'react'
export const revalidate = 60
const fqaPage = async () => {
  await connectDb()
  const fqas = await Fqa.find().sort({ createdAt: 1 })
  return (
    <div>
      <FqaComponent fqas={JSON.parse(JSON.stringify(fqas))} />
    </div>
  )
}

export default fqaPage
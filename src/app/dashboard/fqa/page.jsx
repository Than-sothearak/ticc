import React from 'react'
import FqaForm from '../(components)/fqa-form/FqaForm'
import FqaTable from '../(components)/fqa-form/FqaTable'
import { connectDb } from '@/lib/connectDb';
import { Fqa } from '@/models/Fqa';

const fqaPage = async () => {
    await connectDb()
    const fqas = await Fqa.find().sort({ createdAt: -1 }).lean()
    
  return (
    <div className='mt-8 lg:px-16 px-2 space-y-6'>
        <FqaForm />
         <div className="max-h-[60vh] overflow-y-auto">
    <FqaTable fqas={JSON.parse(JSON.stringify(fqas))} />
  </div>
        </div>
  )
}

export default fqaPage
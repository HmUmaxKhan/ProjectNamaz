import React from 'react'
import Select from './Select'
import CurrentDate from '@/app/(Shared Components)/CurrentDate'

const NamazSelect = () => {
  return (
    <div className='mt-5 container h-30'>
    <h2 className='mt-3 text-center'>Record the Namaz</h2>
    <CurrentDate />
    <Select />
    </div>
  )
}

export default NamazSelect

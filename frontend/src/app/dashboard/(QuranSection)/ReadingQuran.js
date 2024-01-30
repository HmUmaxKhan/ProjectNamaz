"use client"
import React, { useState } from 'react'

const ReadingQuran = () => {

    const [quran,setQuran] = useState('')

    const handleChange =(event)=>{
        setQuran(event.target.value);
    }

  return (
    <div  className='container'>

    <label htmlFor="ticketQuantity" className="text m-3 text-center h5">
    {`Select your option of How much you read Quran in one day`}<b>{``}</b>
  </label>
  <select
    className="form-select"
    id="ticketQuantity"
    onChange={handleChange}
    value={quran}
  >
    {["Select Option",'less than 1/4','equal or more 1/4','equal or more Half','equal or more 3/4','equal to full','Quran with tafseer'].map((quantity) => (
      <option key={quantity} value={quantity}>
        {quantity}
      </option>
    ))}
  </select>


    <div className="mt-2 d-flex justify-content-center">
    <button type="submit" className="btn btn-outline-success" onClick={()=>console.log(quran)}>Submit</button>
    </div>

    </div>
  )
}

export default ReadingQuran

"use client"

import { useState } from "react"

const Select = () => {

    const [prayers,setPrayers] = useState({
        fajar:"",
        zuhr:"",
        asar:"",
        maghrib:"",
        isha:""
    })

    const handleChange =(event)=>{
        setPrayers({...prayers,[event.target.name]: event.target.value})
    }

  return (
    <div className="mb-3">

      {/*Fajar */}

    <label htmlFor="ticketQuantity" className="text m-3 text-center h5">
      {`Select your option of `}<b>{`Fajar`}</b>
    </label>
    <select
      className="form-select"
      id="ticketQuantity"
      onChange={handleChange}
      name="fajar"
      value={prayers.fajar}
    >
      {["Select Option",'Not Prayed','Prayed at Home','Qaza','Prayed at Masjid'].map((quantity) => (
        <option key={quantity} value={quantity}>
          {quantity}
        </option>
      ))}
    </select>

    {/*Zuhr*/}

    <label htmlFor="ticketQuantity" className="text m-3 text-center h5">
      {`Select your option of `}<b>{`Zuhr/Jumma`}</b>
    </label>
    <select
      className="form-select"
      id="ticketQuantity"
      onChange={handleChange}
      name="zuhr"
      value={prayers.zuhr}
    >
      {["Select Option",'Not Prayed','Prayed at Home','Qaza','Prayed at Masjid'].map((quantity) => (
        <option key={quantity} value={quantity}>
          {quantity}
        </option>
      ))}
    </select>

    {/*Asar*/}

    <label htmlFor="ticketQuantity" className="text m-3 text-center h5">
      {`Select your option of `}<b>{`Asar`}</b>
    </label>
    <select
      className="form-select"
      id="ticketQuantity"
      onChange={handleChange}
      name="asar"
      value={prayers.asar}
    >
      {["Select Option",'Not Prayed','Prayed at Home','Qaza','Prayed at Masjid'].map((quantity) => (
        <option key={quantity} value={quantity}>
          {quantity}
        </option>
      ))}
    </select>

    {/*Maghrib*/}

    <label htmlFor="ticketQuantity" className="text m-3 text-center h5">
      {`Select your option of `}<b>{`Maghrib`}</b>
    </label>
    <select
      className="form-select"
      id="ticketQuantity"
      onChange={handleChange}
      name="maghrib"
      value={prayers.maghrib}
    >
      {["Select Option",'Not Prayed','Prayed at Home','Qaza','Prayed at Masjid'].map((quantity) => (
        <option key={quantity} value={quantity}>
          {quantity}
        </option>
      ))}
    </select>

    {/*Isha*/}

    <label htmlFor="ticketQuantity" className="text m-3 text-center h5">
      {`Select your option of `}<b>{`Isha`}</b>
    </label>
    <select
      className="form-select"
      id="ticketQuantity"
      onChange={handleChange}
      name="isha"
      value={prayers.isha}
    >
      {["Select Option",'Not Prayed','Prayed at Home','Qaza','Prayed at Masjid'].map((quantity) => (
        <option key={quantity} value={quantity}>
          {quantity}
        </option>
      ))}
    </select>

    <div className="mt-2 d-flex justify-content-center">
    <button type="submit" className="btn btn-outline-success" onClick={()=>console.log(prayers)}>Submit</button>
    </div>
  </div>
  )
}

export default Select

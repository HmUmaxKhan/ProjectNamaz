import React from 'react'

const Select = () => {
  return (
    <div>
    <div className="mb-3">
    <label htmlFor="ticketQuantity" className="text mb-1">
      Select Ticket Quantity
    </label>
    <select
      className="form-select"
      id="ticketQuantity"
    >
      {['Not Prayed','Prayed at Home','Qaza','Prayed at Masjid'].map((quantity) => (
        <option key={quantity} value={quantity}>
          {quantity}
        </option>
      ))}
    </select>
  </div>
    </div>
  )
}

export default Select

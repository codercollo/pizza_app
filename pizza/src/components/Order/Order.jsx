import React from 'react'

function Order({openHour, closeHour}) {
  return (
    <div>
        <div className='order'>
          <p>
            We're open from {openHour}:00 AM until {closeHour}:00 PM
            Come visit us or order online.
          </p>

          <button className='btn'>Order</button>
        </div>
    </div>
  )
}

export default Order
import React from 'react'
import Order from '../Order/Order';

function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
    
  return (
    
   <footer className='footer'>

       {isOpen ? (
         <Order closeHour={closeHour} openHour={openHour}/>
       ) : (
           <p>
            We're happy to welcome you between {openHour}:00  AM and {closeHour}:00 PM.
           </p>
       )}

   </footer>

)}
     

export default Footer 
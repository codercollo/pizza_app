import React from 'react'
import Pizza from '../Pizza/Pizza'
import pizzaData from '../pizzaData'





function Menu() {
  
  const  pizzas =pizzaData;
  const numPizzas =pizzas.length ;
  return (
    
       <main className='menu'>
         <h2>Our Menu</h2>
       
        {numPizzas > 0? (

          <React.Fragment>

          <p>
          Authentic Italian cuisine.Six creative dishes to choose from.
          All from our stone oven, all organic, all delicious!
         </p>

         <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza}
            key={pizza.name}/>
          ))}
        </ul>

          </React.Fragment>

        ) :

        (
        <p>We're still working on our menu. Please come back later!</p> 
        
        )}
         

         </main>

           
  )
}

export default Menu

 

import Focaccia from './assets/focaccia.jpg';
import Margherita from './assets/margherita.jpg';
import Spinaci from './assets/spinaci.jpg';
import Funghi from './assets/funghi.jpg';
import Salamino from './assets/salamino.jpg';
import Prosciutto from './assets/prosciutto.jpg';


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 1500,
      photoName: Focaccia,
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 1000,
      photoName:Margherita,
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 1200,
      photoName:Spinaci,
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 1200,
      photoName: Funghi,
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 1500,
      photoName:Salamino,
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 1800,
      photoName: Prosciutto,
      soldOut: true,
    },
  ];

  export default pizzaData;
import restaurant from "../utils/mockData";
import RestaurantCard from "./RestaurantCart";
import { useState } from "react"; 



const Body = () => {
  const [restaurant,setrestaurant] = useState([restaurant])
  return (
    <main className="home-container">
      <div className="search-container">
        <input type="text" placeholder="Search Restaurants..." className="search-bar" />
      </div> 
      <div>
        <button className="Top-resto" onClick={()=>{
        const Toprestaurant=restaurant.filter((res)=> res.rating>3)
         console.log(restaurant);
         setrestaurant(Toprestaurant)
         
          
        }}>Top restaurant</button>
      </div>
      <div className="res-container"> 
        {/* Render multiple restaurant cards */}
        {restaurant.map((res, index) => (
          <RestaurantCard key={index} restaurant={res} />
        ))}
      </div>
    </main>
  );
};
 

export default Body
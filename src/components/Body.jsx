import restaurantData from "../utils/mockData"; 
import RestaurantCard from "./RestaurantCart";
import { useState,useEffect } from "react";
import ShimmerCard from "./shimmer";

const Body = () => {

  const [restaurants, setRestaurants] = useState(restaurantData);
  const [searchText,setsearchText] = useState("")

  useEffect(()=>{
    // fetchData()
    
  },[])
  // const  fetchData=(()=>{
  //   const Data = fetch("https://github.com/muhammedAlthafcp")

  // })

  return restaurants.length === 0 ? <ShimmerCard/> : (
    <main className="home-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Restaurants..."
        className="search-bar"
        value={searchText}onChange={(e)=>{
             setsearchText(e.target.value)
        }}
        />
        <button className="search-btn" onClick={()=>{
          const hello = restaurants.filter((res)=>{
            console.log(res);
            
            res.name.toLowerCase().includes(searchText.toLowerCase())
            console.log(hello);
            
          })
        }}>search</button>
      </div> 
      <div>
        <button
          className="Top-resto"
          onClick={() => {
            const topRestaurants = restaurants.filter((res) => res.rating > 4.5);
            setRestaurants(topRestaurants); // Update state with filtered data
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* Render multiple restaurant cards */}
        {restaurants.map((res, index) => (
          <RestaurantCard key={index} restaurant={res} />
        ))}
      </div>
    </main>
  );
};

export default Body;

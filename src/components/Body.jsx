import restaurantData from "../utils/mockData"; 
import RestaurantCard from "./RestaurantCart";
import { useState } from "react";

const Body = () => {

  const [restaurants, setRestaurants] = useState(restaurantData);
  return (
    <main className="home-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Restaurants..."
          className="search-bar"
        />
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

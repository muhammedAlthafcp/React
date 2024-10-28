import RestaurantCart from "./RestaurantCart";
import restaurantData from "../utils/mockData";
import { useState } from 'react';

const Body = () => {
  const [restaurantDatas, setRestaurantDatas] = useState(restaurantData); // Initialize state with restaurantData
  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={() => {
            const filteredData = restaurantData.filter(res => res.rating > 4.5); // Filter top-rated restaurants
            setRestaurantDatas(filteredData); // Update state with filtered data
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantDatas.map((restaurant) => (
          <RestaurantCart key={restaurant.id} resData={restaurant} />
        ))} 
      </div>
    </div>
  );
};

export default Body;

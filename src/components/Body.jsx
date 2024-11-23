import restaurantData from "../utils/mockData";
import RestaurantCard from "./RestaurantCart";
import { useState, useEffect } from "react";
import ShimmerCard from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantData); // State for restaurant data
  const [searchText, setSearchText] = useState(""); // State for search input

  useEffect(() => {
    // Fetch restaurant data from an API or database here
    // For now, we're using mockData
  }, []);

  const handleSearch = () => {
    const filteredRestaurants = restaurantData.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestaurants(filteredRestaurants); // Update state with filtered data
  };

  const handleTopRestaurants = () => {
    const topRestaurants = restaurantData.filter((res) => res.rating > 4.5);
    setRestaurants(topRestaurants); // Update state with filtered data
  };

  return restaurants.length === 0 ? (
    <ShimmerCard />
  ) : (
    <main className="home-container">
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Restaurants..."
          className="search-bar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Top Restaurants Button */}
      <div>
        <button className="Top-resto" onClick={handleTopRestaurants}>
          Top Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container">
        {restaurants.map((res, index) => (
          <RestaurantCard key={index} restaurant={res} />
        ))}
      </div>
    </main>
  );
};

export default Body;

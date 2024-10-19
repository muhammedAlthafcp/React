import RestaurantCart from "./RestaurantCart";
import restaurantData from "../utils/mockData";
import {useState} from 'react'
  
const {restaurantDatas,listofresto}= useState([
    restaurantData
])



const Body = () => {
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn"onClick={()=>{
            const restaurantDatas = restaurantData.filter(res=>{
                  return  res.rating>4.5

                })
                console.log(restaurantDatas);
                
            }} >Top Rated restaurant </button>
        </div>
        <div className="res-container">
          {restaurantData.map((restaurant) => (
            <RestaurantCart key={restaurant.id} resData={restaurant} />
          ))} 
        </div>
      </div>
    );
  }; 
  export default Body
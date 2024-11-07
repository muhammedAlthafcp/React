import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";
import RestaurantCart  from "./components/RestaurantCart";

// Header Component
// const Header = () => {
//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=360"
//           alt="Logo"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//           <li>
//             <a href="#">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }; 
// Sample restaurant data
const restaurantData = [
  {
    id: 1,
    name: "Maghana Foods",
    cuisine: "Indian",
    rating: 4.5,
    location: "Mumbai, India",
    priceRange: "$$",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
  },
  {
    id: 2,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.7,
    location: "Tokyo, Japan",
    priceRange: "$$$",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500",
  },
 
  {
    id: 4,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.6,
    location: "Mexico City, Mexico",
    priceRange: "$",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500",
  },

  {
    id: 6,
    name: "Burger Haven",
    cuisine: "American",
    rating: 4.2,
    location: "New York, USA",
    priceRange: "$",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  {
    id: 7,
    name: "Chez Paris",
    cuisine: "French",
    rating: 4.8,
    location: "Paris, France",
    priceRange: "$$$",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lcOlhmLvxqbYJNkdKBl7nDCz7pnLYHnRCMmMJJPc80F_d-cALWK2RHFGFIPTyxxD52s&usqp=CAU",
  },
  {
    id: 8,
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.5,
    location: "Delhi, India",
    priceRange: "$$",
    image:
      "data:image/jpeg;base64,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",
  }
];
// Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" placeholder="Search..." />
      </div>
      <div className="res-container">
        {restaurantData.map((restaurant) => (
          <RestaurantCart key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}; 
// RestaurantCart Component
const RestaurantCart = ({ resData }) => {
  return (
    <div className="res-cart">
      <img src={resData.image} alt={resData.name} />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisine}</h4>
      <h4>{resData.rating} stars</h4>
      <h4>{resData.location}</h4>
    </div>
  );
};
// AppLayout Component

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);
// Rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
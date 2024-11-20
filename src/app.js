import React from "react";
import ReactDOM from "react-dom/client";
// import "./styles.css"; // Link to the stylesheet
import Header from "./components/Header";
import Body from "./components/Body";



// const restaurant = [
//   {
//     name: "The Spice Hub",
//     cuisines: ["Indian", "Chinese", "Thai"],
//     avgRating: 4.5,
//     deliveryTime: 30,
//     image:
//         "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500",
  
//   },
//   {
//     name: "Urban Bistro",
//     cuisines: ["Italian", "Continental"],
//     avgRating: 4.2,
//     deliveryTime: 25
//   },
//   {
//     name: "Burger Bliss",
//     cuisines: ["Fast Food", "American"],
//     avgRating: 4.0,
//     deliveryTime: 20
//   },
//   {
//     name: "Green Bowl",
//     cuisines: ["Healthy", "Vegan"],
//     avgRating: 4.8,
//     deliveryTime: 35
//   },
//   {
//     name: "Sushi Delight",
//     cuisines: ["Japanese"],
//     avgRating: 4.7,
//     deliveryTime: 40
//   },
//   {
//     name: "Curry Corner",
//     cuisines: ["Indian"],
//     avgRating: 4.1,
//     deliveryTime: 30
//   },
//   {
//     name: "Pasta Paradise",
//     cuisines: ["Italian"],
//     avgRating: 4.3,
//     deliveryTime: 25
//   },
//   {
//     name: "Taco Fiesta",
//     cuisines: ["Mexican"],
//     avgRating: 4.6,
//     deliveryTime: 20
//   },
//   {
//     name: "Grill & Chill",
//     cuisines: ["BBQ", "American"],
//     avgRating: 4.4,
//     deliveryTime: 30
//   },
//   {
//     name: "Dessert Haven",
//     cuisines: ["Desserts", "Bakery"],
//     avgRating: 4.9,
//     deliveryTime: 15
//   }
// ];




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

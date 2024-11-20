import restaurant from "../utils/mockData";
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="res-card">
      <img
        src={restaurant.image}
        alt="Restaurant"
        className="res-card-img"
      />
      <h3 className="res-card-title">{restaurant.name}</h3>
      <p className="res-card-desc">{restaurant.cuisine}</p>
      <h4>Rating: {restaurant.rating}</h4>
      <h4>Delivery Time: {restaurant.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard
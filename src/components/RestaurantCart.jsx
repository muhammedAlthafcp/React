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

  
export default rest
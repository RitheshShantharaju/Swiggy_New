import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import {useContext, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import resCardItems from "../utils/mockData/resCardItems"; // Importing the mock data directly
import Spinner from "../images/spinner.gif";
import emptyCard from "../images/emptyCart.png";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resCardItems);
  const [filteredRestaurant, setFilteredRestaurant] = useState(resCardItems); // Initialize with all restaurants
  const [hasMore, setHasMore] = useState(true); // To control if there are more items to load

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const {loggedInUser, setUserName} = useContext(UserContext);

  // Online status check
  const onlineStatus = useOnlineStatus();

  if (onlineStatus !== true) return <img src={emptyCard} alt="No internet" />;

  // Function to load more data for Infinite Scroll
  const fetchMoreData = () => {
    setTimeout(() => {
      setListOfRestaurant((prevRestaurants) => {
        const newRestaurants = [...prevRestaurants, ...resCardItems];
        // Update filteredRestaurant when new data is fetched
        setFilteredRestaurant(newRestaurants);
        return newRestaurants;
      });
    }, 1000);

    // Stop loading once we reach a certain threshold
    if (filteredRestaurant.length >= 1000) {
      setHasMore(false);
    }
  };

  //Top Rated button
  const handleTopRatedFilter = () => {
    const topRatedList = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurant(topRatedList);
  };

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        {/* Search Input and Button */}

        {/* Filter Button for Top Rated Restaurants */}
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={handleTopRatedFilter}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      {/* Infinite Scroll Component */}
      <InfiniteScroll
        dataLength={filteredRestaurant.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<img className="m-auto py-8" src={Spinner} alt="Loading..." />}
      >
        {/* Render restaurant cards */}
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant, index) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id + "_" + index}
            >
              {restaurant.locality ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Body;

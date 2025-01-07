import {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import resCardItems from "../utils/mockData/resCardItems";
import RestaurantCard from "./RestaurantCard";
import {Link} from "react-router-dom";
import CustomizedArrow from "../utils/constant/customizedArrow";

//
const Search = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resCardItems);

  const [filteredRestaurant, setFilteredRestaurant] = useState(resCardItems);

  const [searchText, setSearchText] = useState("");

  let settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <CustomizedArrow />,
    nextArrow: <CustomizedArrow />,
  };

  // Handle search and filter
  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchText(searchQuery);

    // Filter restaurants based on search text
    const filteredList = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
  };
  return (
    <div className="search m-4 p-4">
      <input
        className="border-[1px] border-solid border-black 
         flex p-4 w-9/12 mx-36 my-12 rounded-md cursor-text"
        text="text"
        placeholder="Search for restaurants and food"
        value={searchText}
        onChange={handleSearch}
      />
      <div className="m-auto w-[300px] ">
        <h1 className="text-xl font-semibold">
          Popular restaurant's near you 😋
        </h1>
      </div>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Search;

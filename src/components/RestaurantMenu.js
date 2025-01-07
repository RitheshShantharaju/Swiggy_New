import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {Link, useParams} from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";

const RestaurantMenu = () => {
  const {resId} = useParams();

  const [showIndex, setShowIndex] = useState();

  const itms = useSelector((store) => store.cart.items);

  // Fetch restaurant data using the custom hook
  const resInfo = useRestaurantMenu(resId);

  // Destructure data from resInfo, provide default values if necessary
  const {
    name,
    cuisines = [],
    costForTwo = 0,
  } = resInfo?.cards[2]?.card?.card?.info || {};

  // Handle categories
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // Check if resInfo is null or not available, show shimmer until data is ready
  if (!resInfo) {
    return <Shimmer />;
  }

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"} -
        Rs.{costForTwo / 100}
      </p>

      {/* Categories accordions */}
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}

      {itms.length > 0 && (
        <div className="bg-green-600 text-white mx-60 my-2 py-2 flex justify-between sticky bottom-1">
          <span className="mx-2">{itms.length} item added</span>
          <div className="mx-2">
            <Link to="/cart">
              <span className="mx-1">View Cart</span>
              <FontAwesomeIcon icon={faCartArrowDown} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;

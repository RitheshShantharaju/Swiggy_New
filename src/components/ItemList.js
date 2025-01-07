//In this component description part like menu list and price name is built here

import {useDispatch} from "react-redux";
import {CDN_URL, LOGO_URL} from "../utils/constants";
import {addItem} from "../utils/cartSlice";

const ItemList = ({items}) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute"></div>
            <img src={LOGO_URL + item.card.info.imageId} className="w-full" />
            <button
              onClick={() => handleAddItems(item)}
              className="py-2 mx-10 rounded-lg bg-white text-green-600 font-bold	 "
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

import {useDispatch, useSelector} from "react-redux";
import ItemList from "./ItemList";
import {clearCart, removeItem} from "../utils/cartSlice";
import {LOGO_URL} from "../utils/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faCreditCard} from "@fortawesome/free-solid-svg-icons";
import emptyCart from "../images/emptyCart.png";

import {
  faGooglePay,
  faAmazonPay,
  faPaypal,
} from "@fortawesome/free-brands-svg-icons";

const Cart = () => {
  //To read cartInfo from the store
  //we have to subscribe to the store using selector
  const deleteItem = (item) => {
    dispatch(removeItem(item));
  };

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  let iTemTotal = 0;

  cartItems.filter((item) => {
    item.card.info.price
      ? (iTemTotal = iTemTotal + item.card.info.price / 100)
      : (iTemTotal = iTemTotal + item.card.info.defaultPrice / 100);
  });

  let taxTotal = (iTemTotal * 5) / 100;
  let grandTotal = iTemTotal + taxTotal;

  return cartItems.length === 0 ? (
    <div>
      <img src={emptyCart} className="w-2/4 m-auto mt-4" />

      <button></button>
    </div>
  ) : (
    <div className="m-4 p-4 text-center  ">
      <h1 className="text-2xl font-bold  ">Cart Items</h1>

      <div className="w-6/12 m-auto ">
        <div className="flex justify-between">
          <button
            onClick={handleClearCart}
            className="p-2 m-2 rounded-lg bg-gray-200 text-red-600 font-bold	"
          >
            Clear cart
          </button>
        </div>

        {/* <ItemList items={cartItems} /> */}

        <div>
          {cartItems.map((item) => (
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
                <img
                  src={LOGO_URL + item.card.info.imageId}
                  className="w-full"
                />
              </div>
              <div className="-scroll-mx-80 2-xl ">
                <FontAwesomeIcon
                  icon={faXmark}
                  size="xl"
                  color="red"
                  className="cursor-pointer"
                  onClick={() => deleteItem(item.card.info.id)}
                />
              </div>
            </div>
          ))}
          <div className="text-start">
            <h1 className="font-semibold text-lg text-start">Bill Details</h1>
            <p className="border-b-2 border-gray-200 text-gray-500">
              Item Total : {" " + iTemTotal}
            </p>
            <p className="my-2 text-gray-500">
              GST & Restaurant Charges : {" " + taxTotal.toFixed(2)}
            </p>
            <h1 className="border-t-2 border-black mt-8">
              To Pay : {" " + grandTotal.toFixed(2)}
            </h1>
          </div>

          <div className="flex">
            <h1 className="mt-8 font-bold">Pay Via - </h1>
            <ul className="flex cursor-pointer">
              <li className="m-7">
                {" "}
                <FontAwesomeIcon icon={faCreditCard} size="2xl" />
              </li>
              <li className="m-7">
                {" "}
                <FontAwesomeIcon icon={faAmazonPay} size="2xl" />
              </li>
              <li className="m-7">
                {" "}
                <FontAwesomeIcon icon={faPaypal} size="2xl" />
              </li>
              <li className="m-7">
                {" "}
                <FontAwesomeIcon icon={faGooglePay} size="2xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

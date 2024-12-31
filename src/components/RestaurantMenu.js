// //Api used here is the menu api

// //This component is now has a custom hook(useRestaurantMenu) from where the data is fetched.

// //This component now takes care of only displaying the data ;
// //this is done to make the code more modular, more maintainable and make it clean

// import Shimmer from "./Shimmer";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import {useParams} from "react-router-dom";

// const RestaurantMenu = () => {
//   const {resId} = useParams();

//   //here useRestaurantMenu is the custom hook;  which is a separate file(useRestaurantMenu) in utils folder
//   const resInfo = useRestaurantMenu(resId);
//   const {name, cuisines, costForTwo} =
//     resInfo?.cards[2]?.card?.card?.info || {};

//   const {itemCards} =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
//       ?.card || {};

//   return resInfo === null ? (
//     <Shimmer />
//   ) : (
//     <div className="menu">
//       <h1>Menu</h1>
//       <h1>{name}</h1>
//       <p>
//         {cuisines.join(", ")} - {costForTwo / 100}{" "}
//       </p>

//       {
//         <ul>
//           {itemCards.map((item) => (
//             <li key={item.card?.info?.id}>
//               {item.card?.info?.name}-{""}
//               {item.card?.info?.price / 100}
//             </li>
//           ))}
//         </ul>
//       }
//     </div>
//   );
// };

// export default RestaurantMenu;

//In this component only the accordian card title and length of items eg recomended(4) is only built here

//The description part like menu list and price name is built in ItemList component(child component) and also click handle

//This is the child component of RestaurantMenu (parent component ) and parent component can control its child component
//This is known as controlled component i.e the child component is now a controlled component
//Previously when it had its own state it was an uncontrolled component (episode 11)
//The child component can modify the state variable of parent; its possible indirectly by
// Passing the setShowIndex to this component from parent component
//

import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  //showItems and setShowIndex will be used only if this compoment becomes a controlled component by parent
  //refer Restaurant Menu when u want to just open one accordian at a time.
  //The below code works for controlled component
  // const handleClick = () => {
  //   setShowIndex();
  // };

  ////The below code works for uncontrolled component, i;e now the Restaurant category component is uncontrolled component.

  const [flag, setFlag] = useState();
  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇ </span>
        </div>
        {flag && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

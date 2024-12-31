import {LOGO_URL} from "../utils/constants";

const RestaurantCard = (props) => {
  const {resData} = props;
  const {name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla} =
    resData.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg"
      style={{backgroundColor: "#f0f0f0"}}
    >
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={LOGO_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

//This is higher order function, here i  used locality instead of promoted since promoted was not present in api,
//was only present for logged in user, so when i use logged in user , change this

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const {resData} = props;
    const {locality} = resData.info;
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          {locality}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

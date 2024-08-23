import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const {resData} = props;
    const {name,cuisines,areaName,avgRating} = resData.card.card.info;
    return(
        <div className="res-card">
            <img className="res-logo"
             alt ="res-logo" src={CDN_URL +resData.card.card.info.cloudinaryImageId}
             />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRating}  ✡ stars</h4>
        </div>
    );
};

export default RestaurantCard;
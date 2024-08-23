import RestaurantCard from "./RestaurantCard.js";
import {useState,useEffect} from "react"
import resList from "../utils/mockData.js";
const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurants]= useState(resList);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch(

        );

        const json = await data.json();
        setListOfRestaurants(json)

    }
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() =>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.card.card.info.avgRating >= 4
                    );
                    setListOfRestaurants(filteredList);
                }}
                >top rated restraunts</button>
            </div>
            
            <div className="res-container">
                {listOfRestaurants.map((restaurant)=>(
                   <RestaurantCard key={restaurant.card.card.info.id}resData = {restaurant}/>
                ))}
                {/* <RestaurantCard resData = {resList[0]}/>
                <RestaurantCard resData = {resList[1]}/>
                <RestaurantCard resData = {resList[2]}/>
                <RestaurantCard resData = {resList[3]}/>
                <RestaurantCard resData = {resList[4]}/>
                <RestaurantCard resData = {resList[5]}/>
                <RestaurantCard resData = {resList[6]}/> */}
                {/* <RestaurantCard resData = {resObj[7]}/> */}
                {/* <RestaurantCard resData = {resObj[8]}/> */}
                
               

            </div>
        </div>
    );
};

export default Body;
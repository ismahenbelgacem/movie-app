import React from "react"
import {faSearch  } from "@fortawesome/free-solid-svg-icons";
import "boutstrap/dist/css/bootsrap.min.css";
import { Rating } from "react-simple-star-rating";
import { link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar({setSearch,setRating}) {
 const handleRating =(rate) => {
    setRating(rate)
 }  
 const onPointerEnter = () => console.log('Enter')
 const onPointerleave = () => console.log('leave')
 const onPointerMove = () => (value, index) => console.log(value, index)
 return (
    <>
    <div className= 'nav'>
        <from className='search-btn' >
     <input type="texte" placeholder='EnterMovie' className='inputText' onChange={(e)=>""}>
 </input>
       <button><FontAwesomeIcon icon={faSearch}/></button>
       <Rating 
       className='star-rating'
       onClick={handleRating}
       onPointerEnter={onPointerEnter}
       onPointerleave={onPointerleave}
       onPointerMove={onPointerMove}
       size="16px"/>   
       </from>
       <button className="add-movie">
       <link to="/add">
        Add Movie
       </link>
       </button>
    </div>
    </>
 )
}
export default Navbar;
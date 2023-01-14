import React from 'react';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import MovieList from '../MovieList/MovieList';
function Home({deleteCard,Newadd,addMovie}){
  const [search, setSearch]=useState("")
    
      const [rating, setRating] = useState(0)
      const handleRating = (rate) => {
        setRating(rate)
      } 
  return (
    <div>
        <input className="form-control me-2"  placeholder="SEARCH"  onChange={(e)=>setSearch(e.target.value)} />
    <Rating  onClick={handleRating} />

      <MovieList 
      deleteCard={deleteCard} 
    c={Newadd.filter((el)=>el.title.toLowerCase().includes(search.toLowerCase().trim())&& el.rating >=rating )}
    /> 
    </div>  )}
  
export default Home;
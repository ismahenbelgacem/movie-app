import { useState } from "react";
import "bootsrap/dist/css/bootsrap.min.css";
import MovieList from "./component/MovieList/movielist";
import AddMovie  from "./component/AddMovie/addMovie";
import Navbar from "./component/Navbar/navbar";
import "./App.css";
import { Route,Routes} from "react-router-dom";
import {Movie} from "./component/Movie/movie";
const  App = () => {
 const [Newmovies, setNewmovies] = useState(Movie)
const [search,setSearch ] = useState("")
const [rating, setRating] = useState(0)
const addMovie=(title,desc,rating,posterUrl,trailerSrc)=>{
  setNewmovies([...Newmovies,{title,description:desc,rating, id:Newmovies.length+1,posterUrl}])
}
return(
  <div className='container-fluid movie-app'>
    <Routes>
      <Routes path='/' element={
        <div className='row'>
          <div className='add-nav'>
            <Navbar setSearch={setSearch} setRating={setRating}/>
          </div>
        </div>
      }/>
      <Route path='/add' element={<div>AddMovie addMovie={addMovie}</div>}/>
    </Routes> 

  </div>
)
}
 export default App;
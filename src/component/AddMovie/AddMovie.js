import React, { useState } from 'react'
import { link, useNavigate } from 'react-router-dom'
const AddMovie = ({addMovie}) => {
    const [title, setTitle] = useState("")
    const [desc,setDesc ] = useState("")
    const [posterUrl, setPosterUrl] = useState("")
    const [rating, setRating] = useState(0)
    const navigate = useNavigate();
    const handleClick =(e)=>{
        e.preventDfault()
        if (!(title && rating && posterUrl && desc)) {
            alert('Missed Field is required')
            return
        }
        addMovie(title,desc,rating,posterUrl);
        navigate('/')
    }
        return (
        <div>
            <form className="login-box">
            Title
         <input type="text" placeholder="Add Title" on change={(e) => setTitle(e.target.value)} />
         description
        <input type="text" placeholder="Add Description" onchange={(e) => setDesc(e.target.value)} />
           Rating
           <input type="number" placeholder="AddRating" onchange={(e) => setRating(e.target.value)} />
        posterURL
        <input type="number" placeholder="Add PosterUrl" />
        </form>
                   </div>
         
        )
    }

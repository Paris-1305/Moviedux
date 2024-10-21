import {  useState } from "react";
import React from "react";
import '../styles.css'
import MovieCard from "./MovieCard";

export default function MovieGrid({movies, watchlist, toggleWatchlist}){
    
    const [searchTerm, setSearchTerm]=useState("")

    const [genre, setGenre]=useState("All Genres")
    const [rating, setRating]=useState("All ratings")


     const handleSearchChange=(e)=>{
       setSearchTerm(e.target.value)
     };

     const handleGenreChange=(e)=>{
        setGenre(e.target.value)
     }
     
     const handleRatingChange=(e)=>{
        setRating(e.target.value)
     }

     const matchesGenre = (movie, genre)=>{
        return genre ==="All Genres" ||  movie.genre.toLowerCase() === genre.toLowerCase();
     }

     const matchesSearchTerm=(movie, searchTerm)=>{
      return  movie.title.toLowerCase().includes(searchTerm.toLowerCase());
     }

     const matchesRating=(movie, rating)=>{
      switch(rating){
        case "All":
         return true;
         case "Good":
            return movie.rating >= 8;
        case "ok":
                return movie.rating >= 5 && movie.rating <= 8;
        case "bad":
            return movie.rating < 5;
         default:
            return false;
      }
     }
     const filteredMovies=movies.filter((movie)=>
        matchesGenre(movie, genre)  && 
       matchesSearchTerm(movie, searchTerm)  
    && matchesRating(movie, rating)  
    ) 
    return(
        <div>
            <input 
            type="search" 
            className="search-input" 
            placeholder="Search-movies..." 
            value={searchTerm}
            onChange={handleSearchChange}
            />

            <div className="filter-bar">
                <div className="filter-slot">
                    <label>Genre</label>
                    <select className="filter-dropdown" 
                    value={genre} 
                    onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className="filter-slot">
                <label>rating</label>
                    <select className="filter-dropdown" 
                    value={rating} 
                    onChange={handleRatingChange}>
                    <option>All</option>
                    <option>Good</option>
                    <option>ok</option>
                    <option>bad</option>
                    </select>
                 
                </div>
            </div>
             <div className="movies-grid">
             {
         filteredMovies.map(movie=>(
            <MovieCard 
            movie={movie} 
            key={movie.id} 
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchlist.includes(movie.id)}
            />
     ))}
        </div>
        </div>
    )
       
}
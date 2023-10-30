import React from "react";

export default function MovieListItem({ movie }) {
    return (
        <li key={movie.imdbID}>
            {/* This displays the movie poster */}
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            {/* This displays the movie title */}
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    {/* This displays an emoji of a calendar followed by the movie's year */}
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
}
import React from "react";
import MovieListItem from "./MovieLIstItem";

// This component takes in three props: movies, isOpen1, and setIsOpen1
export default function MovieList({ movies, isOpen1, setIsOpen1 }) {
    return (
        <div className="box">
            {/* This button toggles the visibility of the movie list */}
            <button
                className="btn-toggle"
                onClick={() => setIsOpen1((open) => !open)}
            >
                {/* This displays a minus sign if the movie list is open, and a plus sign if it is closed */}
                {isOpen1 ? "–" : "+"}
            </button>
            {/* This displays the movie list if isOpen1 is true */}
            {isOpen1 && (
                <ul className="list">
                    {/* This maps over the movies array to create a list item for each movie */}
                    {movies?.map((movie) => (
                        <MovieListItem key={movie.imdbID} movie={movie} />
                    ))}
                </ul>
            )}
        </div>
    );
}
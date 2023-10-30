import React from "react";

export default function WatchedList({ watched, isOpen2, setIsOpen2, avgImdbRating, avgUserRating, avgRuntime }) {
    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
                <>
                    <div className="summary">
                        <h2>Movies you watched</h2>
                        <div>
                            <p>
                                <span>#️⃣</span>
                                <span>{watched.length} movies</span>
                            </p>
                            <p>
                                <span>⭐️</span>
                                <span>{avgImdbRating}</span>
                            </p>
                            <p>
                                <span>🌟</span>
                                <span>{avgUserRating}</span>
                            </p>
                            <p>
                                <span>⏳</span>
                                <span>{avgRuntime} min</span>
                            </p>
                        </div>
                    </div>

                    <ul className="list">
                        {watched.map((movie) => (
                            <li key={movie.imdbID}>
                                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                                <h3>{movie.Title}</h3>
                                <div>
                                    <p>
                                        <span>⭐️</span>
                                        <span>{movie.imdbRating}</span>
                                    </p>
                                    <p>
                                        <span>🌟</span>
                                        <span>{movie.userRating}</span>
                                    </p>
                                    <p>
                                        <span>⏳</span>
                                        <span>{movie.runtime} min</span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}
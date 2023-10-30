import React from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NumResults from "./NumResults";

export default function NavBar({ query, setQuery, movies }) {
    return (
        <nav className="nav-bar">
            <Logo />
            <SearchInput query={query} setQuery={setQuery} />
            <NumResults movies={movies} />
        </nav>
    );
}
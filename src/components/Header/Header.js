import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import SearchBar from "../SearchBar/SearchBar";
import Sort from "./Sort";
import Pagination from "../Pagination/Pagination";
import "./Header.css";

const Header = ({orderBy, setOrderBy, setQuery, page, setPage}) => {
    return <div className="Header">
        <Filter />
        <Sort />
        <SearchBar setQuery={setQuery}/>
        <Pagination page={page} setPage={setPage} />
    </div>;
}

export default Header;

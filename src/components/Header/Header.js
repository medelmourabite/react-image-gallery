import React from 'react';
import './Header.css';
import { Pagination, SearchBar } from '../Common';

const Header = ({ setQuery, page, setPage }) => {
  return (
    <div className="Header">
      <div>
        <h3>Image Gallery</h3>
      </div>
      <SearchBar setQuery={setQuery} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Header;

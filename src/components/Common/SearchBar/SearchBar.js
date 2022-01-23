import React from "react";
import {debounce} from "../../../utils";
import "./SearchBar.css";
import {IconSearch} from "../../Icons";

export const SearchBar = ({setQuery}) => {
  const onChange = debounce((e) => {
    setQuery(e.target.value);
  }, 1000);

  return <div className={"SearchBar"}>
    <IconSearch/>
    <input type={"text"} onChange={onChange}/>
  </div>;
};

import React from "react";
import Photo from "../Photo/Photo";
import "./Grid.css";

const Grid = ({photos}) => {
  const columns = photos.reduce((acc, p, index) => {
    if (!acc[index % 4]) {
      acc[index % 4] = [p];
    } else {
      acc[index % 4].push(p);
    }
    return acc;
  }, []);

  return <div className="Grid">
    {columns.map((photos, index) => <div className="Grid__Column" key={`column-${index}`}>
      {photos.map(({id, ...photo}) => <Photo key={id} {...photo}/>)}
    </div>)}
  </div>;
};

export default Grid;

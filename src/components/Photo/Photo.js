import React, { useEffect, useState } from "react";
import "./Photo.css";


const Photo = ({urls, alt_description}) => {
    return <div className="Photo">
        <img src={urls.thumb} alt={alt_description} />
    </div>;
}

export default Photo;

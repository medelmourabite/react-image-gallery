import React, {useState} from "react";
import "./Photo.css";
import {CloseIcon} from "../Icons";

const Photo = ({urls, alt_description}) => {
  const [fullScreen, setFullScreen] = useState(false);
  return <div className={`Photo ${fullScreen ? "FullScreen" : ""}`}
              onClick={() => fullScreen ? undefined : setFullScreen(true)}>
    <img src={fullScreen ? urls.full : urls.thumb} loading={"lazy"} alt={alt_description}/>
    {alt_description ? <p>{alt_description}</p> : null}
    {fullScreen ? <CloseIcon onClick={() => setFullScreen(false)}/> : null}
  </div>;
};

export default Photo;

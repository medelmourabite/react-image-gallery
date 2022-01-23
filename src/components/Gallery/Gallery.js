import React, { useEffect, useState, useCallback } from "react";
import { fetchPhotos } from "../../api/fetchPhotos";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Gallery.css";
import Grid from "../Grid/Grid";
import Loader from "../Loader/Loader";

const Gallery = () => {
    const [fetching, setFetching] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");

    useEffect(() => {
        setFetching(true);
        fetchPhotos(query, page).then((photos) => {
            setPhotos(photos);
        }).finally(() => {
            setFetching(false);
        })
    }, [query, page]);


    return <div className="Gallery">
        <Header setQuery={setQuery} page={page} setPage={setPage}/>
        {fetching ? <Loader/> : <Grid photos={photos} />}
    </div>;
}

export default Gallery;

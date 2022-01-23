import React, { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

const Footer = ({page, setPage}) => {
    return <div>
        <Pagination page={page} setPage={setPage} />
    </div>;
}

export default Footer;

/* React useLocation */

import React from "react";
import { useParams, useLocation } from "react-router-dom";

const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    console.log(location);

    return (
        <>
        <h1>
          user {fname} {lname} page
        </h1>
        <p> My current location is {location.pathname} </p>
        {location.pathname === `/user/vinod/thapa` ? (
            <button onClick={ () => alert(`you are awesome`)}> Click Me </button>
        ) : null}
        </>
    );
};

export default User;

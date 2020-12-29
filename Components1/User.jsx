/* React useParams */

import React from "react";
import { useParams } from "react-router-dom";

// const User = ({ match }) => {
//     return <h1> user {match.params.fname} </h1>;
// };

const User = () => {
    const { fname, lname } = useParams();
    return <h1> user {fname} {lname} </h1>;
};

export default User;

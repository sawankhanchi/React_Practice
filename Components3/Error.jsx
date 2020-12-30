import React from "react";

const Error = () => {
    return (
        <>
        <div>
            <h1> 404 Error Page </h1>
            <p> Sorry, This page doesn't exist </p>
            <NavLink to="/"> Go Back </NavLink>
        </div>
        </>
    );
};

export default Error;

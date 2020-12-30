import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";

const App = () => {
    return (
        <>
        <Navbar />
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* <Route component={Error} /> */}
            <Redirect to="/" />
        </Switch>
        </>
    );
};

export default App;

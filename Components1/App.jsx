import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Error from "./Error";
import User from "./User";

const App = () => {
    const Name = () => {
        return <h1> Hello, I am a name page </h1>
    };

    return (
        <>
        <Menu />
        <Switch>
            <Route 
              exact 
              path="/" 
              component={() => <About name="About" />} />
            <Route 
              exact 
              path="/service" 
              render={() => <Service name="Service" />} />
            <Route path="/contact" component={Contact} />
            <Route path="/user/:fname/:lname" component={User} />
            <Route component={Error} />
        </Switch>
        </>
    );
};

export default App;

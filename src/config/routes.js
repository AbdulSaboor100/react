import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from "../screens/home";
import LoginHome from "../screens/homeLogin";
import Login from "../screens/login";
import Products from "../screens/products";
  

function Routes(){
    return(
        <div>
            <Router >
                {/* <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path="/products/:id">
                        <Products />
                    </Route>
                </Switch> */}
                <Switch>
                <Route path='/' exact>
                        <Login />
                    </Route>
                    <Route path='/homeLogin'>
                        <LoginHome />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
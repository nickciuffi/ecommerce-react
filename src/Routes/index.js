import React from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Products from "../Pages/Products";

export default function Routes(){
    return(
        <BrowserRouter>
        <Router>
            
            <Route element = { <Home /> }  path="/" exact />
            <Route element = { <Products /> }  path="/products" />
            
        </Router>
        </BrowserRouter>
    )
 }

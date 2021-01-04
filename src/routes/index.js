import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import ProductsPage from "../pages/ProductsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/products" component={ProductsPage} />
    </Switch>
  );
};

export default Routes;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";
// import Nav from "./components/nav";
import DashBoard from "./pages/admin/dashboard/index";
import NotFound from "./pages/admin/notfound404/index";
import Product from "./pages/admin/product/index";
import Category from "./pages/admin/category";
import AddCategoryForm from "./pages/admin/category/add";
import AddProductForm from "./pages/admin/product/add";
import EditProductForm from "./pages/admin/product/edit";
import DetailProductForm from "./pages/admin/product/detail";
import Signup from "./pages/web/signup";
import Signin from "./pages/web/signin";
import Home from "./pages/web/Home";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />
          <div className="container-fluid">
            <div className="row">
              {/* <Nav /> */}
              <main>
                <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route exact path="/product">
                    <Product {...props} />
                  </Route>
                  <Route exact path="/product/detail/:id">
                    <DetailProductForm {...props} />
                  </Route>
                  <Route exact path="/signup">
                    <Signup />
                  </Route>
                  <Route exact path="/signin">
                    <Signin />
                  </Route>
                  <Route exact path="*">
                    <NotFound></NotFound>
                  </Route>
                </Switch>
              </main>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Routes;

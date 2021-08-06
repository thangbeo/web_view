import React from "react";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="main">
      <div className="navClass">
        <div className="">
          <div className="row rowStyle">
            <div className="col-3">
              <form className="form-inline pt-lg-1 search-field">
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button type="submit" className="search-submit">
                  <span className="flaticon-magnifying-glass-browser"></span>
                </button>
              </form>
            </div>
            <div className="col-1  styleColor ">
              <NavLink className="nav-link " aria-current="page" to="/">
                <span data-feather="home" />
                Home
              </NavLink>
            </div>

            <div className="col-1  styleColor">
              <NavLink className="nav-link " aria-current="page" to="/product">
                <span data-feather="home" />
                Product
              </NavLink>
            </div>
            <div className="col-1  styleColor">
              <NavLink className="nav-link " aria-current="page" to="/Elements">
                <span data-feather="home" />
                Elements
              </NavLink>
            </div>
            <div className="col-1  styleColor">
              <NavLink className="nav-link " aria-current="page" to="/">
                <span data-feather="home" />
                <img></img>
              </NavLink>
            </div>
            <div className="col-1  styleColor">
              <NavLink className="nav-link " aria-current="page" to="/Blog">
                <span data-feather="home" />
                Blog
              </NavLink>
            </div>
            <div className="col-1  styleColor">
              <NavLink className="nav-link " aria-current="page" to="/Pages">
                <span data-feather="home" />
                Pages
              </NavLink>
            </div>
            <div className="col-1  styleColor">
              <NavLink className="nav-link " aria-current="page" to="/signin">
                <span data-feather="home" />
                signin
              </NavLink>
            </div>
            <div className="col-1  styleColor">
              <NavLink className="nav-link " aria-current="page" to="/signup">
                <span data-feather="home" />
                signup
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function Product(props) {
  console.log(props);
  return (
    <div className="main_home">
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-6 d-none d-md-inline-block">
              <div className="part-wrap part-filter">
                <div className="part-filter-wrap">
                  <a
                    href="#filter"
                    className="filter-con"
                    data-toggle="collapse"
                  >
                    Filter
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-6 d-none d-md-inline-block">
              <div className="part-wrap part-product-wrap d-inline-flex float-right">
                <div className="  part-product-size">
                  <a className="product-size active size-9 size-md-9">
                    <svg
                      viewBox="0 0 16 16"
                      id="view-size-5"
                      width="100%"
                      height="100%"
                    >
                      <path d="M4.769 3.385c0 .762-.623 1.385-1.385 1.385S2 4.146 2 3.385 2.623 2 3.385 2s1.384.623 1.384 1.385zM9.385 3.385c0 .762-.623 1.385-1.385 1.385s-1.385-.624-1.385-1.385S7.238 2 8 2s1.385.623 1.385 1.385zM4.769 8c0 .762-.623 1.385-1.385 1.385S2 8.762 2 8s.623-1.385 1.385-1.385S4.769 7.238 4.769 8zM9.385 8c0 .762-.623 1.385-1.385 1.385S6.615 8.762 6.615 8 7.238 6.615 8 6.615 9.385 7.238 9.385 8zM4.769 12.615c0 .762-.623 1.385-1.384 1.385S2 13.377 2 12.615s.623-1.385 1.385-1.385 1.384.624 1.384 1.385zM9.385 12.615C9.385 13.377 8.762 14 8 14s-1.385-.623-1.385-1.385.623-1.384 1.385-1.384 1.385.623 1.385 1.384zM14 3.385c0 .762-.623 1.385-1.385 1.385s-1.385-.623-1.385-1.385S11.854 2 12.615 2C13.377 2 14 2.623 14 3.385zM14 8c0 .762-.623 1.385-1.385 1.385S11.231 8.762 11.231 8s.623-1.385 1.385-1.385C13.377 6.615 14 7.238 14 8zM14 12.615c0 .762-.623 1.385-1.385 1.385s-1.385-.623-1.385-1.385.623-1.385 1.385-1.385A1.39 1.39 0 0 1 14 12.615z"></path>
                    </svg>
                  </a>
                  <a className="product-size size-4 size-md-4">
                    <svg
                      viewBox="0 0 16 16"
                      id="view-size-4"
                      width="100%"
                      height="100%"
                    >
                      <path d="M7 4.5C7 5.875 5.875 7 4.5 7S2 5.875 2 4.5 3.125 2 4.5 2 7 3.125 7 4.5zM14 4.5C14 5.875 12.875 7 11.5 7S9 5.875 9 4.5 10.125 2 11.5 2 14 3.125 14 4.5zM7 11.5C7 12.875 5.875 14 4.5 14S2 12.875 2 11.5 3.125 9 4.5 9 7 10.125 7 11.5zM14 11.5c0 1.375-1.125 2.5-2.5 2.5S9 12.875 9 11.5 10.125 9 11.5 9s2.5 1.125 2.5 2.5z"></path>
                    </svg>
                  </a>
                  <a className="product-size size-1 size-md-1">
                    <svg
                      viewBox="0 0 16 16"
                      id="view-size-3"
                      width="100%"
                      height="100%"
                    >
                      <path d="M14 8c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6z"></path>
                    </svg>
                  </a>
                </div>
                <div className=" part-product-order d-none d-md-flex  ">
                  <div className="form-order">
                    <span class="type-order-text">Sort by popularity</span>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                    <ul className="sorting-type">
                      <li className="sorting-text">
                        <span>Sort by popularity</span>
                      </li>
                      <li className="sorting-text">
                        <span>Default Sorting</span>
                      </li>
                      <li className="sorting-text">
                        <span>Price</span>
                      </li>
                      <li className="sorting-text">
                        <span>Product Name</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row js-sort gutter">
        {props.products.map((item, index) => (
          <div key={index} className="col-3 js-sort-item trans-product">
            <div className="product">
              <div className="product-image ">
                <img src={item.url}></img>
                <div className="button-loop-action">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add to Wishlist"
                    className="add-to-wishlist"
                  ></a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add to cart"
                    className="add-to-cart"
                  ></a>
                  <Link
                    to={`/product/detail/${item.id}`}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick-view"
                    className="quick-view"
                  ></Link>
                </div>
              </div>
              <h3 className="product-title">
                <a href="">{item.name}</a>
              </h3>
              <span className="product-price"> {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

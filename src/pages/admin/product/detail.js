import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { get } from "../../../api/productAPI";
import { useState } from "react";

const DetailProductForm = (props) => {
  const [product, setProduct] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await get(id);

      setProduct(data);
      // reset(data);
    };
    getProduct();
  }, []);

  const onClose = () => {
    history.push("/product");
  };
  return (
    <div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="row">
            <div style={{ paddingTop: "4px" }} className="col-6">
              <div className="ApRQXC">
                <img src={product.url}></img>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-2">
                  <div className="style_title">Yêu thích+</div>
                </div>
                <div className="col-10" style={{ padding: "0px" }}>
                  <div className="style_title1">{product.name} </div>
                </div>
                <div className="col-12">
                  <div className="_119xyB">Chưa có đánh giá | 0 đã bán</div>
                </div>
                <div className="col-12">
                  <div className="_1HEBVl">
                    <div className="_28heec">₫270.000</div>
                    <div style={{ display: "flex" }}>
                      <div className="_3e_UQT">₫216.000</div>
                      <div className="_2dyNDF">20% giảm</div>
                    </div>
                  </div>
                </div>
                <div className="col-12" style={{ padding: "20px 30px" }}>
                  <div className="row">
                    <div className="col-3">
                      <div className="mini-vouchers__label">
                        Mã giảm giá của Shop
                      </div>
                    </div>
                    <div className="col-9">
                      <div className="mini-vouchers__vouchers flex flex-auto flex-no-overflow">
                        <div className="voucher-ticket voucher-ticket--VN voucher-ticket--seller-mini-solid mini-voucher-with-popover">
                          <div className="">
                            <div className="voucher-promo-value voucher-promo-value--absolute-value">
                              Giảm ₫30k
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex _3AHLrn _2XdAdB">
                  <div className="">
                    <div className="row">
                      <div
                        className="col-3"
                        style={{ alignSelf: "center", marginBottom: "12px" }}
                      >
                        Màu sắc
                      </div>
                      <div className="col-9">
                        <div className="row">
                          <div className="col-3">
                            <div className="product-variation"> Đen</div>
                          </div>
                          <div className="col-3">
                            <div className="product-variation">Đỏ</div>
                          </div>
                          <div className="col-3">
                            <div className="product-variation">Trắng</div>
                          </div>
                          <div className="col-3">
                            <div className="product-variation">Xám</div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-3"
                        style={{ alignSelf: "center", marginBottom: "12px" }}
                      >
                        Kích cỡ
                      </div>
                      <div className="col-9">
                        <div className="row">
                          <div className="col-3">
                            <div className="product-variation"> S</div>
                          </div>
                          <div className="col-3">
                            <div className="product-variation">M</div>
                          </div>
                          <div className="col-3">
                            <div className="product-variation">L</div>
                          </div>
                          <div className="col-3">
                            <div className="product-variation">XL</div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-3"
                        style={{ alignSelf: "center", paddingTop: "12px" }}
                      >
                        Số lượng
                      </div>
                      <div
                        className="col-9
                      "
                        style={{ paddingTop: "12px" }}
                      >
                        <div className="row">
                          <div class="_16mL_A shopee-input-quantity">
                            <button class="_2KdYzP">+</button>
                            <input
                              class="_2KdYzP iRO3yj"
                              type="text"
                              value="1"
                            />
                            <button className="_2KdYzP">-</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{ paddingTop: "30px" }}>
                      <div className="col-4">
                        <div className="btn-tinted _3Kiuzg">
                          Thêm vào giõ hàng
                        </div>
                      </div>
                      <div className="col-4">
                        <div className=" btn-solid-primary _3Kiuzg">
                          Mua ngay
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="_3wdEZ5">
              <div className="_2pGc2E">CHI TIẾT SẢN PHẨM</div>
              <div className="_1afiLm">
                <div className="aPKXeO">
                  <div className="SFJkS3">Danh mục: </div>
                  <div className="_1J-ojb">{product.category}</div>
                </div>
                <div className="aPKXeO">
                  <div className="SFJkS3">Xuất xứ: </div>
                  <div className="_1J-ojb">Việt Nam</div>
                </div>
                <div className="aPKXeO">
                  <div className="SFJkS3">Chất liệu:</div>
                  <div className="_1J-ojb">Cao cấp</div>
                </div>
                <div className="aPKXeO">
                  <div className="SFJkS3">Mẫu:</div>
                  <div className="_1J-ojb">Mới</div>
                </div>
                <div className="aPKXeO">
                  <div className="SFJkS3">Số lượng:</div>
                  <div className="_1J-ojb">30</div>
                </div>
                <div className="aPKXeO">
                  <div className="SFJkS3">Rất lớn:</div>
                  <div className="_1J-ojb">Có</div>
                </div>
                <div className="aPKXeO">
                  <div className="SFJkS3">Kho hàng:</div>
                  <div className="_1J-ojb">30</div>
                </div>
                <div className="aPKXeO">
                  <div className="SFJkS3">Gửi từ:</div>
                  <div className="_1J-ojb">Hà Nội</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <footer>
        <div class="bg-footer">
          <div class="container">
            <div class="row ">
              <div class="col-lg-4 col-md-12 col-12 order-lg-2 ">
                <div class="logo-footer border-sty">
                  <img src="image/logo-footer.png" alt="29" />
                </div>
              </div>
              <div class="col-lg-4 col-md-6 order-lg-1">
                <div class="row border-sty">
                  <div class="col-lg-6 col-md-6 text-md-center text-lg-left ">
                    <h2 class="widget-title">Company</h2>
                    <ul class="menu-company ">
                      <li class="menu-item">Our Story</li>
                      <li class="menu-item">Eureka</li>
                      <li class="menu-item">Project</li>
                      <li class="menu-item">Thinkers</li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-md-6 text-md-center text-lg-left ">
                    <h2 class="widget-title">Infomation</h2>
                    <ul class="menu-company">
                      <li class="menu-item">Help</li>
                      <li class="menu-item">FeedBack</li>
                      <li class="menu-item">Return</li>
                      <li class="menu-item">Press</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 order-lg-3">
                <div class="new-letter text-md-center text-center ">
                  <h3 class="newletter-title">Don't miss out on the lastest</h3>
                  <div class="newletter-decription">
                    Get notified of new products, limited releases, and more.
                  </div>
                  <form class="newletter-form">
                    <input
                      type="email"
                      class="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <button
                      type="submit"
                      name="submit-button"
                      class="btn-submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" bg-footer2">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-12 text-md-center text-lg-left text-center">
                <div class="social-net">
                  <a class="social-item" href="">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a class="social-item" href="">
                    <i class="fa fa-dribbble"></i>
                  </a>
                  <a class="social-item" href="">
                    <i class="fa fa-behance"></i>
                  </a>
                  <a class="social-item" href="">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 col-12 text-md-center text-footer ">
                2019 Famithemes. All rights reserved
              </div>
              <div class="col-lg-4 col-md-12 col-12 text-md-center pay-onl text-lg-right text-center">
                <a class="pay-onl-item" href="">
                  <img
                    class="img-fluid pb-4"
                    src="image/payment-img.png"
                    alt="30"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default DetailProductForm;

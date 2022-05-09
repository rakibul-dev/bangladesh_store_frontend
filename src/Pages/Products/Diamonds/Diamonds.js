import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Col, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/spinner/Spinner";
import { clearErrors, getProduct } from "../../../redux/actions/productAction";
import { getUnits } from "../../../redux/actions/unitAction";
import Diamond from "../Diamond/Diamond";
import Products from "../Products/Products";
const Diamonds = () => {
  const categories = [
    "Diamond"
  ];

  const alert = useAlert();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("Diamond");

  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const { keyword } = useParams();

  const { units } = useSelector((state) => state.units);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getUnits());
  }, [alert, dispatch, error]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, category));
  }, [dispatch, error, alert, keyword, currentPage, category]);

  console.log(products);
  return (



    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <h2>
            Our <span style={{ color: "gray" }}>Diamond </span> Products
          </h2>
          <div className="container">
            <div className="row">

              <div className="container col-9">


                {/* <Row> */}
                <div class=" row ">
                  {products &&
                    products.map((product) => (
                      <Col sm={4} md={3}>
                        <Products
                          key={product._id}
                          product={product}
                          units={units}
                        ></Products>
                      </Col>
                    ))}
                </div>

                {/* </Row> */}






                {/* Pagination section  */}
                {resultPerPage < productsCount && (
                  <div>
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    ></Pagination>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>


    // <div>
    //   <h1>Our Diamond Products</h1>

    //   <div style={{ width: "90%" }} className="row mb-5 body mx-auto">

    //   </div>
    // </div>
  );
};

export default Diamonds;

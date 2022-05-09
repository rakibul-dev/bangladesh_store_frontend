import { default as React, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Col, NavLink } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/spinner/Spinner";
import anklet from "../../../images/silver/anklet.png";
import bangle from "../../../images/silver/bangle.png";
import chain from "../../../images/silver/chain.png";
import others from "../../../images/silver/others.png";
import { clearErrors, getProduct } from "../../../redux/actions/productAction";
import { getUnits } from "../../../redux/actions/unitAction";
import Products from "../Products/Products";




const categories = [
  "Silver Anklet",
  // "Silver Bala",
  "Silver Bangal",
  // "Silver Crown",
  // "Silver Chur",
  "Silver Chain",
  // "Silver Earrings",
  "Silver Finger Ring",
  // "Silver Locket",
  // "Silver Mangalsutra",
  // "Silver Nosepin",
  // "Silver Necklace",
  // "Silver Pola",
  // "Silver Shakha",
  // "Silver Shitahar",
  // "Silver Tiara",
  // "Silver Tikli",
  "Silver Others",
];
const Silver = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("Silver Bala");

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
  console.log(units);

  return (

    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <h2>
            Our <span style={{ color: "gray" }}>Silver </span> Products
          </h2>
          <div className="container">
            <div className="row">
              <div style={{ height: 800 }} className="col-3 catagory-container">
                {/* Category Section  */}
                <h4>Categories</h4>

                <div onClick={() => setCategory("Silver Anklet")}>
                  <NavLink>
                    {" "}
                    <img src={anklet} width="100px" alt="" />
                    <p className="catagory-text">Anklet</p>
                  </NavLink>
                </div>

                <div onClick={() => setCategory("Silver Bangal")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={bangle} width="100px" alt="" />
                    <p className="catagory-text">Bangle</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Silver Finger Ring")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={bangle} width="100px" alt="" />
                    <p className="catagory-text">Bangle</p>
                  </NavLink>
                </div>




                <div onClick={() => setCategory("Silver Chain")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={chain} width="100px" alt="" />
                    <p className="catagory-text">Chain</p>
                  </NavLink>
                </div>

                <div onClick={() => setCategory("Silver Others")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={others} width="100px" alt="" />
                    <p className="catagory-text">Others</p>
                  </NavLink>
                </div>

                {/* <ul className="">
                  {categories.map((category) => (
                    <li
                      className="category"
                      key={category}
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul> */}
              </div>
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

    //   <h1> Our Silver Products</h1>

    //   <Container style={{ width: "90%" }} className="row mb-5 ml-5  mx-auto">
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid mt-5  box" src={anklet} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Anklet</h5>{" "}
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid mt-5 box " src={bangle} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Bangle</h5>{" "}
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid mt-5  box" src={braclet} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Bracelet</h5>{" "}
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid mt-5  box" src={chain} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Chain</h5>{" "}
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid mt-5  box" src={fingerring} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Finger ring</h5>{" "}
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid mt-5  box" src={others} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Others</h5>{" "}
    //       </button>
    //     </Col>
    //   </Container>

    // </div>
  );
};

export default Silver;

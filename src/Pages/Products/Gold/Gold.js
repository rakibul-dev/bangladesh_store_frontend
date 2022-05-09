import { default as React, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Col, NavLink, Row } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/spinner/Spinner";
import anklet from "../../../images/Gold/anklet.png";
import bala from "../../../images/Gold/Bala.png";
import bangle from "../../../images/Gold/Bangle.png";
import chain from "../../../images/Gold/chain.png";
import chur from "../../../images/Gold/chur.png";
import crown from "../../../images/Gold/crown.png";
import earring from "../../../images/Gold/earring.png";
import fingerring from "../../../images/Gold/fingerring.png";
import locket from "../../../images/Gold/locket.png";
import mongalsuttra from "../../../images/Gold/mongalsutra.png";
import necklace from "../../../images/Gold/necklace.png";
import nosepin from "../../../images/Gold/nosepin.png";
import others from "../../../images/Gold/others.png";
import pola from "../../../images/Gold/pola.png";
import shakha from "../../../images/Gold/sakha.png";
import sitahar from "../../../images/Gold/sitahar.png";
import tiara from "../../../images/Gold/tiara.png";
import tikli from "../../../images/Gold/tikli.png";
import { clearErrors, getProduct } from "../../../redux/actions/productAction";
import { getUnits } from "../../../redux/actions/unitAction";
import Products from "../Products/Products";
import "./Gold.css";

const categories = [
  "Gold Anklet",
  "Gold Bala",
  "Gold Bangal",
  "Gold Crown",
  "Gold Chur",
  "Gold Chain",
  "Gold Earrings",
  "Gold Finger Ring",
  "Gold Locket",
  "Gold Mangalsutra",
  "Gold Nosepin",
  "Gold Necklace",
  "Gold Pola",
  "Gold Shakha",
  "Gold Shitahar",
  "Gold Tiara",
  "Gold Tikli",
  "Gold Others",
];

const Gold = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("Gold Bala");

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
            Our <span style={{ color: "gray" }}>Gold </span> Products
          </h2>
          <div className="container">
            <div className="row">
              <div style={{ height: 850 }} className="col-3 catagory-container">
                {/* Category Section  */}
                <h4>Categories</h4>

                <div onClick={() => setCategory("Gold Anklet")}>
                  <NavLink>
                    {" "}
                    <img src={anklet} width="100px" alt="" />
                    <p className="catagory-text">Anklet</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Bala")}>
                  <NavLink>
                    {" "}
                    <img src={bala} width="100px" alt="" />
                    <p className="catagory-text">Bala</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Bangal")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={bangle} width="100px" alt="" />
                    <p className="catagory-text">Bangle</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Bracelet")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={bangle} width="100px" alt="" />
                    <p className="catagory-text">Bracelet</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Crown")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={crown} width="100px" alt="" />
                    <p className="catagory-text">Crown</p>
                  </NavLink>
                </div>

                <div onClick={() => setCategory("Gold Chur")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={chur} width="100px" alt="" />
                    <p className="catagory-text">Chur</p>
                  </NavLink>
                </div>

                <div onClick={() => setCategory("Gold Chain")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={chain} width="100px" alt="" />
                    <p className="catagory-text">Chain</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Earrings")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={earring} width="100px" alt="" />
                    <p className="catagory-text">Ear Ring</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Finger Ring")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={fingerring} width="100px" alt="" />
                    <p className="catagory-text">Finger Ring</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Locket")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={locket} width="100px" alt="" />
                    <p className="catagory-text">Locket</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Mangalsutra")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={mongalsuttra} width="100px" alt="" />
                    <p className="catagory-text">Mangalsutra</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Necklace")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={necklace} width="100px" alt="" />
                    <p className="catagory-text">Necklace</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Nosepin")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={nosepin} width="100px" alt="" />
                    <p className="catagory-text">Nosepin</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Pola")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={pola} width="100px" alt="" />
                    <p className="catagory-text">Pola</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Shakha")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={shakha} width="100px" alt="" />
                    <p className="catagory-text">Shakha</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Shitahar")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={sitahar} width="100px" alt="" />
                    <p className="catagory-text">Shitahar</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Tiara")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={tiara} width="100px" alt="" />
                    <p className="catagory-text">Tiara</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Tikli")}>
                  <NavLink style={{ marginBottom: 0 }}>
                    {" "}
                    <img src={tikli} width="100px" alt="" />
                    <p className="catagory-text">Tikli</p>
                  </NavLink>
                </div>
                <div onClick={() => setCategory("Gold Others")}>
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
                      <Col sm={6} md={3}>
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
                  <div style={{ marginLeft: -80 }} className="pagination ">
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
    //
    //
    //   <div style={{ width: "90%" }} className="row mb-5 body mx-auto">
    //     <Col sm={6} md={4}>
    //       <div>
    //         <img
    //           className="img-fluid mt-5 box "
    //           height="300px"
    //           src={anklet}
    //           alt=""
    //         />
    //         <button type="button" className="btn btn-outline-secondary mt-4">
    //           <h5>Anklet</h5>{" "}
    //         </button>
    //       </div>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img
    //         className="img-fluid  mt-5  box "
    //         height="300px"
    //         src={bala}
    //         alt=""
    //       />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Bala</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box " src={bangle} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Bangal</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box " src={crown} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Crown</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box " src={chur} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Chur</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid mt-5  box " src={chain} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Chain</h5>{" "}
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid mt-5  box " src={earring} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Earring</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5 " src={fingerring} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Finger Ring</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={locket} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Locket</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={mongalsutra} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Mongalsutra</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5 box " src={necklace} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Necklace</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={nosepin} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Nosepin</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5 box " src={pola} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Pola</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={shaka} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Sakha</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={sitahar} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Sitahar</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box" src={tiara} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Tiara</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5   box" src={tikli} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Tikli</h5>
    //       </button>
    //     </Col>
    //     <Col sm={6} md={4}>
    //       <img className="img-fluid  mt-5  box " src={others} alt="" />
    //       <button type="button" className="btn btn-outline-secondary mt-4">
    //         <h5>Others</h5>
    //       </button>
    //     </Col>
    //   </div>
    //
    // </div>
  );
};

export default Gold;

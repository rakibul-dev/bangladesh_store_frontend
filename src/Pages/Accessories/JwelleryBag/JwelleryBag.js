import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Col } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/spinner/Spinner";
import {
  clearErrors,
  getAccessories,
} from "../../../redux/actions/accessoriesAction";
import Accessory from "../Accessory/Accessory";

const categories = ["Bag", "Box", "Machine", "Manufacture Item"];
const JwelleryBag = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("Bag");

  const { loading, error, accessories, accessoryCount, resultPerPage } =
    useSelector((state) => state.accessories);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAccessories(currentPage, category));
  }, [dispatch, error, alert, currentPage, category]);

  console.log(accessories);

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <h2>
            Our <span style={{ color: "gray" }}>Accessories </span>
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-3">
                {/* Category Section  */}
                <h4>Categories</h4>
                <ul className="">
                  {categories.map((category) => (
                    <li
                      className="category"
                      key={category}
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="container col-9">
                <div class="row ">
                  {accessories &&
                    accessories.map((item) => (
                      <Col sm={4} md={3}>
                        <Accessory key={item._id} item={item}></Accessory>
                      </Col>
                    ))}
                </div>

                {/* Pagination section  */}
                {resultPerPage < accessoryCount && (
                  <div>
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={accessoryCount}
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
  );
};

export default JwelleryBag;

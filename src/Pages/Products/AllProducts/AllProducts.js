import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/spinner/Spinner";
import { clearErrors, getProduct } from "../../../redux/actions/productAction";
import Products from "../Products/Products";

const AllProducts = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage));
  }, [dispatch, error, alert, keyword, currentPage]);

  console.log(products);

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div class="container">
          <div class="row justify-content-center">
            {products &&
              products.map((product) => (
                <Products key={product._id} product={product}></Products>
              ))}
          </div>
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
      )}
    </>
  );
};

export default AllProducts;

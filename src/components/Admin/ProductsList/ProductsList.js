import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
} from "../../../redux/actions/productAction";
import Spinner from "../../spinner/Spinner";
import Sidebar from "../Sidebar/Sidebar";
import ProductListData from "./ProductListData";

const ProductsList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  //   const { id } = useParams();

  const { error, products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getAdminProduct());
  }, [dispatch, alert, error]);
  console.log(products);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-8">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">PRODUCT NAME</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">STOCK</th>
                    <th scope="col">WEIGHT</th>
                    <th scope="col">TYPE</th>

                    <th scope="col">EDIT</th>
                    <th scope="col">DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {products &&
                    products.map((product) => (
                      <ProductListData
                        key={product._id}
                        product={product}
                      ></ProductListData>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsList;

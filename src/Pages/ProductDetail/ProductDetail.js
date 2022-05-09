import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../redux/actions/productAction";
import { NEW_REVIEW_RESET } from "../../redux/constants/productConstants";
import ReviewCard from "./ReviewCard/ReviewCard";

const ProductDetail = () => {
  const [rating, setRating] = useState();
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const { id } = useParams();

  const alert = useAlert();

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  // Review Section
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }
    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, reviewError, success]);

  //   Rating Options
  const options = {
    size: "large",
    value: product.ratings,
    readonly: true,
    precision: 0.5,
  };

  // Review Submit
  const reviewSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <div>
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className=""
                    key={item.url}
                    src={item.url}
                    alt={`${i}`}
                  ></img>
                ))}
            </div>
            <div>
              <div>
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
              </div>
              <div></div>
              <div>
                <b>{product.Stock < 1 ? "Out Of Stock" : "In Stock"}</b>
              </div>
              <div className="">
                <ReactStars {...options}></ReactStars>
                <span>({product.numOfReviews} Reviews)</span>
              </div>
              <div>
                Description: <p>{product.description}</p>
              </div>
            </div>
          </div>

          {/* Reviews Section  */}
          <div>
            <h3>Reviews</h3>

            <form>
              <input
                type="number"
                placeholder="Give Ratings 0 to 5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />

              <textarea
                cols="30"
                rows="5"
                placeholder="Give Your Review"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button onClick={reviewSubmit}>Submit Review </button>
            </form>

            {product.reviews && product.reviews[0] ? (
              <>
                <div>
                  {product.reviews &&
                    product.reviews.map((review) => (
                      <ReviewCard review={review}></ReviewCard>
                    ))}
                </div>
              </>
            ) : (
              <p>No Reviews Yet</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;

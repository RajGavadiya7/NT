// after clicking product from main page we go here

import type { NextPage } from "next";
import { useRouter } from "next/router";
import dataproduct from "../../database/dummyproducts";
import datauser from "../../database/dummyusers";
import ReviewCard from "../../components/ReviewCard";
import AddReviewForm from "../../components/AddReviewForm";
import { useState, useEffect } from "react";
const current_user_id = 100;

// next have two ways page or component
const Product: NextPage = () => {
  const router = useRouter();
  const id = router.query.productid;
  const obj = dataproduct.find((o) => o.productid === id);
  const [reviews, setReviews] = useState(datauser);

  useEffect(() => {
    console.log(reviews);
  }, [reviews]);
  // Product code page
  return (
    <div>
      {/* details about card data */}
      <div className="container">
        <div className="image-container">
          <img src={obj?.url} alt={obj?.productname} />
        </div>
        <div className="product-info">
          <h1>{obj?.productname}</h1>
          <p>{obj?.discription}</p>
          <p>{obj?.price}</p>
        </div>
      </div>

      <div className="">
        <h1>Reviews</h1>
        <hr></hr>
        <div className="reviews-container">
          <div className="reviews">
            {reviews.map((obj: any) => {
              if (obj.productid === id) {
                return (
                  <div className="review-card">
                    <ReviewCard data={obj} />
                  </div>
                );
              }
            })}
          </div>
          <div className="add-review">
            <div className="add-review-card">
              <AddReviewForm data={[id, reviews, setReviews]} />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
            .container{
                width:100vw;  
                height:30rem;
                display:flex;
                flex-direction:row;
                align-items:center;
                background:#dedede;
            }

            .image-container{
               width: 30rem;
               height: 30rem;
                overflow:hidden;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .image-container img{
                height:100%;
                object-fit:cover;
            }

            .product-info{
                width: 30rem;
                height: 30rem;
                display:flex;
                flex-direction:column;
                align-items:flex-start;
                justify-content:flex-start;
                margin-left:2rem;
            }


            .reviews-container{
              width:100%;
              display:flex;
              flex-direction:row;
      
            }
            .reviews{
              width: 60%;
            }

            .review-card{
              margin:1rem;
              width: 100%;
            }

            .add-review{
              width: 40%;
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
              height: 40rem;
              padding: 3rem;
            }

            .add-review-card{

            }
            `}
      </style>
    </div>
  );
};
export default Product;

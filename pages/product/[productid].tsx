// after clicking product from main page we go here
// Modules
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Badge } from "@mantine/core";

// Components and data
import dataproduct from "../../database/dummyproducts";
import datauser from "../../database/dummyusers";
import ReviewCard from "../../components/ReviewCard";
import AddReviewForm from "../../components/AddReviewForm";

// Next have two ways page or component
// Main
const Product: NextPage = () => {
  // Getting the Id
  const router = useRouter();
  const id = router.query.productid;
  const obj = dataproduct.find((o) => o.productid === id);
  
  // Array of Revies state
  const [reviews, setReviews] = useState(datauser); 

  // Debug
  useEffect(() => {
    console.log(reviews);
  }, [reviews]);

  // Product code page
  return (
    <div>
      {/* Details about card data */}
      <div className="header">
        <h1>Sasta Amazon</h1>
      </div>
      <div className="container-1">
        <div className="image-container">
          <img src={obj?.url} alt={obj?.productname} />
        </div>
        <div className="product-info">
          <h1>{obj?.productname}</h1>
          <p>{obj?.discription}</p>
          <Badge color="green" variant="light" size="xl">
          {" ₹ " + obj?.price}
        </Badge>
        </div>
      </div>

      {/* Reviews */}
      <div className="container-2">
        <h1>Reviews</h1>
        <hr></hr>
        <div className="reviews-container">
          <div className="reviews">
            {/* Iterate over reviews state and return its unique review card */}
            {
            reviews.map((obj: any, key:number) => {
              if (obj.productid === id) {
                return (
                  <div className="review-card" key={key}>
                    <ReviewCard data={[obj, reviews, setReviews]} key={key}/>
                  </div>
                );
              }
            })}
          </div>
          {/* Add a review form */}
          <div className="add-review">
            <div className="add-review-card">
              <AddReviewForm data={[id, reviews, setReviews]} />
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
         .header{
          width:100vw;
          height:10vh;
          background-color:black;
          position:fixed;
          top:0;
          left:0;
          z-index:100;
          
        }
        .header h1{
          margin-left: 2rem ;
          color:white;
        }
        .reviews-container{
          background-color: #cfe6dc;
        }
            .container-1{
              margin-top:60px;
              padding:20px;
                width:100%;  
                height:30rem;
                display:flex;
                flex-direction:row;
                align-items:center;
                background:#f6e6f7;
            }

            .image-container{
               
               width: 50rem;
               height: 30rem;
                overflow:hidden;
                display:flex;
                align-items:left;
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

            .container-2 h1{
                margin-left: 1rem;
            }
            .reviews-container{
              width:100%;
              display:flex;
              flex-direction:row;
      
            }
            .reviews{
              width: 60%;
              background-color: #cfe6dc;
            }

            .review-card{
              margin:1rem;
              width: 100%;
            }
            .header{
              width:100vw;
              height:10vh;
              background-color:black;
              position:fixed;
              top:0;
              left:0;
              z-index:100;
              text:white;
            }

            .add-review{
              width: 40%;
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
              height: 40rem;
              padding: 0 2rem;
            }

            .add-review-card{
              width: 100%;
            }
            `}
      </style>
    </div>
  );
};
export default Product;

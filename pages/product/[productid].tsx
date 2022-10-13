import type { NextPage } from "next";
import { useRouter } from "next/router";
import dataproduct from "../../database/dummyproducts";
import datauser from "../../database/dummyusers";
import ReviewCard from "../../components/ReviewCard";

const current_user_id = 100;

const Product: NextPage = () => {
  const router = useRouter();
  const id = router.query.productid;
  const obj = dataproduct.find((o) => o.productid === id);

  // Product code page
  return (
    <div>
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
            {datauser.map((obj: any) => {
              if (obj.productid === id) {
                return <ReviewCard data={obj} />;
              }
            })}
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

            `}
      </style>
    </div>
  );
};
export default Product;

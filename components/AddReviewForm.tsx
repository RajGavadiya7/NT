// A form to add reviews.
// import modules
import { TextInput, Textarea, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState, useEffect } from "react";

// Components and data
import datauser from "../database/dummyusers";
import RatingComponent from "./RatingComponent";
import currentuser from "../database/currentuser";

// Main export
export default function AddReviewForm(props: any) {
  
  // Input props
  const id = props.data[0];
  const reviews = props.data[1];
  const setReviews = props.data[2];

  // States
  const [review, setReview] = useState({
    username: "",
    rating: "",
    productid: `${id}`,
    timestamp: "",
    discription: "",
    userid:"",
    reviewid:""
  });

  const [isExist, setIsExist] = useState(false);
  const form = useForm({
    initialValues: {
      username: "",
      rating: "",
      productid: `${id}`,
      timestamp: "",
      discription: "",
      userid:"",
    reviewid:""
    },
  });  

  // UseEffect
  // Update the product id in the review
  useEffect(() => {
    setReview({ ...review, productid: `${id}` });
  }, [id]);


  // Check if the user has already reviewed the product
  useEffect(() => {
    let i;    
    for (i = 0; i < props.data[1].length ; i++) {
      if(props.data[1][i].userid === currentuser.userid && props.data[1][i].productid === id){
        setIsExist(true);
        break;
      }
    }
    if(i == props.data[1].length){
      setIsExist(false);
    }
}, [reviews]);

  return (
    <div>
{/* Main Review form */}
<Box sx={{ maxWidth: 300 }} mx="auto">
      <form>
        <TextInput
          withAsterisk
          label="username"
          placeholder="Enter your name"
          {...form.getInputProps("email")}
          onChange={(e) => setReview({ ...review, username: e.target.value })}
        />
        <TextInput withAsterisk label="product id" defaultValue={id} disabled />
        <RatingComponent data={[review, setReview]} />
        <Textarea
          placeholder="Your comment"
          label="Your comment"
          withAsterisk
          onChange={(e) =>
            setReview({ ...review, discription: e.target.value })
          }
        />
        <Group position="right" mt="md">
          <Button
           className={`${isExist? "dissabled": ""}`}
            onClick={() => {
              review.reviewid = Math.random().toString(36).substr(2, 9);
              review.userid = currentuser.userid;
              setReviews([...reviews, review]);
            }}
          >
            Add
          </Button>
        </Group>
      </form>
    </Box>
    <style>
      {
        `
        .dissabled{
          display:none;
        }
          `
      }
    </style>

    </div>
  );
}

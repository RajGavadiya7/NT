// right corner of r.page
import { TextInput, Textarea, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import RatingComponent from "./RatingComponent";
import { useState, useEffect } from "react";
import datauser from "../database/dummyusers";

export default function AddReviewForm(props: any) {
  const id = props.data[0];

  // console.log(props);
  const [review, setReview] = useState({
    username: "",
    rating: "",
    productid: `${id}`,
    timestamp: "",
    discription: "",
  });
  const form = useForm({
    initialValues: {
      username: "",
      rating: "",
      productid: `${id}`,
      timestamp: "",
      discription: "",
    },
  });

  useEffect(() => {
    setReview({ ...review, productid: `${id}` });
  }, [id]);

  // console.log(review);
  const reviews = props.data[1];
  const setReviews = props.data[2];

  return (
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
            onClick={() => {
              setReviews([...reviews, review]);
            }}
          >
            Add
          </Button>
          <Button>Remove</Button>
        </Group>
      </form>
    </Box>
  );
}

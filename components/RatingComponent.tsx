import { NumberInput } from "@mantine/core";
import { useState, useEffect } from "react";

export default function RatingComponent(data: any) {
  const [review, setReview] = data.data;
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setReview({ ...review, rating: rating });
  }, [rating]);
  return (
    <NumberInput
      defaultValue={5}
      min={1}
      max={5}
      placeholder="Rating out of 5"
      label="Rating out of 5"
      withAsterisk
      onChange={(e) => {
        setRating(e || 5);
      }}
    />
  );
}

import { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
          key={i}
        />
      ))}

      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
}

export default StarRating;

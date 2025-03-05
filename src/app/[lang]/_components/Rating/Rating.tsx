"use client";

import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";
import styles from "./Rating.module.scss";

type Props = {
  songId: string;
  onRate: ({
    songId,
    rating,
  }: {
    songId: string;
    rating: number;
  }) => Promise<void>;
};

export const Rating = ({ songId, onRate }: Props) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [hasRated, setHasRated] = useState(false);

  const handleClick = async (value: number) => {
    if (!hasRated) {
      setRating(value);
      setHasRated(true);
      await onRate({ songId, rating: value });
    }
  };

  return (
    <div className={styles.container}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => !hasRated && setHover(star)}
          onMouseLeave={() => !hasRated && setHover(0)}
          disabled={hasRated}
        >
          {star <= (hover || rating) ? (
            <IoStar size={24} />
          ) : (
            <IoStarOutline size={24} />
          )}
        </button>
      ))}
      {hasRated && <p>Thanks for rating!</p>}
    </div>
  );
};

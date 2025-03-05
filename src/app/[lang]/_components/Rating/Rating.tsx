"use client";

import { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./Rating.module.scss";

type Props = {
  songId: string;
  items: Array<{
    emoji: string;
    text: string;
    value: number;
  }>;
  onRate: ({
    songId,
    rating,
  }: {
    songId: string;
    rating: number;
  }) => Promise<void>;
};

export const Rating = ({ songId, onRate, items }: Props) => {
  const [rating, setRating] = useState<number>(0);
  const [hasRated, setHasRated] = useState(false);
  const localStorageKey = `rating-${songId}`;

  useEffect(() => {
    const storedRating = localStorage.getItem(localStorageKey);
    if (storedRating) {
      setRating(Number(storedRating));
      setHasRated(true);
    }
  }, [songId, localStorageKey]);

  const handleClick = async (value: number) => {
    if (!hasRated) {
      setRating(value);
      setHasRated(true);
      localStorage.setItem(localStorageKey, value.toString());

      await onRate({ songId, rating: value });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer}>
        {items.map((item, index) => (
          <button
            key={index}
            className={cx(styles.button, {
              [styles.ratedButton]: rating === item.value,
            })}
            onClick={() => handleClick(item.value)}
            disabled={rating !== item.value && hasRated}
          >
            {item.emoji}
            <span className={styles.hoverText}>{item.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

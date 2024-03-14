"use client";

import React from "react";
import cx from "classnames";
import styles from "./ExpandableList.module.scss";

type PropsType = Readonly<{
  copy: {
    showMoreButton: string;
    showLessButton: string;
  };
  list: React.ReactNode[];
  initialItemsCount: number;
}>;

export function ExpandableList({ copy, list, initialItemsCount }: PropsType) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const slicedList = isExpanded ? list : list.slice(0, initialItemsCount);

  const toggleMoreButtonClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="gap-y-m">
      <ul className={cx(styles.list, "gap-y-m")}>
        {slicedList.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>

      <button onClick={toggleMoreButtonClick} className={styles.buttonLink}>
        {isExpanded ? copy.showLessButton : copy.showMoreButton}...
      </button>
    </div>
  );
}

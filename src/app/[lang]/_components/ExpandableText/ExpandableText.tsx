"use client";

import { useState } from "react";
import cx from "classnames";
import styles from "./ExpandableText.module.scss";

type PropsType = {
  text: string;
  copy: {
    showMore: string;
    showLess: string;
  };
};

export function ExpandableText({ text, copy }: PropsType) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cx(styles.container, "gap-y-s")}>
      <p
        className={cx("preserve-line-breaks", styles.text, {
          [styles.truncated]: !isExpanded,
        })}
      >
        {text}
      </p>
      <button
        className={styles.buttonLink}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? copy.showLess : copy.showMore}
      </button>
    </div>
  );
}

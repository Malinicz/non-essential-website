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
    <div>
      <div
        className={cx(styles.container, {
          [styles.collapsed]: !isExpanded,
          [styles.expanded]: isExpanded,
        })}
      >
        <p className={cx("preserve-line-breaks", styles.text)}>{text}</p>
      </div>
      <button
        className={styles.buttonLink}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? copy.showLess : copy.showMore}
      </button>
    </div>
  );
}

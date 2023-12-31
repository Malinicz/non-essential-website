"use client";

import React from "react";
import cx from "classnames";
import { streamingServicesList } from "@/utils";
import styles from "./StreamingServicesList.module.css";

export function StreamingServicesList() {
  const [streamingServicesListExpanded, setStreamingServicesListExpanded] =
    React.useState(false);

  return (
    <ul
      className={cx(styles.streamingServicesList, {
        [styles.streamingServicesListExpanded]: streamingServicesListExpanded,
      })}
    >
      {streamingServicesList.map((service, index) => {
        if (!streamingServicesListExpanded && index >= 3) return null;

        return (
          <li key={service.name} className={styles.streamingServicesListItem}>
            <a href={service.url} target="_blank" rel="noopener noreferrer">
              {service.name}
            </a>
          </li>
        );
      })}

      {!streamingServicesListExpanded && (
        <li>
          <button
            className={styles.seeMoreButton}
            onClick={() => setStreamingServicesListExpanded(true)}
          >
            ...
          </button>
        </li>
      )}
    </ul>
  );
}

"use client";

import React from "react";
import { streamingServicesList } from "@/utils";
import styles from "./StreamingServicesList.module.css";

export function StreamingServicesList() {
  const [streamingServicesListExpanded, setStreamingServicesListExpanded] =
    React.useState(false);

  return (
    <ul className={styles.streamingServicesList}>
      {streamingServicesList.map((service, index) => {
        if (!streamingServicesListExpanded && index >= 5) return null;

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

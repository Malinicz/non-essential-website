"use client";

import React from "react";
import styles from "./CopyButton.module.scss";

type PropsType = Readonly<{
  copy: {
    buttonLabel: string;
    afterCopyLabel: string;
  };
  text: string;
}>;

export function CopyButton({ copy, text }: PropsType) {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button
      className={styles.copyButton}
      onClick={handleClick}
      disabled={isCopied}
    >
      {isCopied ? copy.afterCopyLabel : copy.buttonLabel}
    </button>
  );
}

"use client";

import React from "react";
import styles from "./UserForm.module.scss";

type PropsType = Readonly<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  copy: {
    label: string;
    placeholder: string;
  };
}>;

export function Textarea({ value, copy, onChange }: PropsType) {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    function adjustHeight() {
      if (!textAreaRef.current) {
        return;
      }

      textAreaRef.current.style.height = "auto";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }

    adjustHeight();

    window.addEventListener("resize", adjustHeight);

    return () => window.removeEventListener("resize", adjustHeight);
  }, [value]);

  return (
    <div className={styles.userFormInputGroup}>
      <label htmlFor="message">{copy.label}</label>
      <textarea
        id="message"
        ref={textAreaRef}
        className={styles.userFormInput}
        placeholder={copy.placeholder}
        rows={1}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

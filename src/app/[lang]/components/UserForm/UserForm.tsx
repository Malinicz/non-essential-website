"use client";

import React from "react";
import styles from "./UserForm.module.css";

type PropsType = Readonly<{
  copy: {
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
  };
}>;

export function UserForm({ copy }: PropsType) {
  return (
    <div className={styles.userForm}>
      <div className={styles.userFormInputGroup}>
        <label htmlFor="myTextarea">{copy.messageLabel}</label>
        <textarea
          id="message"
          className={styles.userFormInput}
          placeholder={copy.messagePlaceholder}
          rows={1}
        ></textarea>
      </div>
      <button className={styles.submitButton}>{copy.submitButton}</button>
    </div>
  );
}

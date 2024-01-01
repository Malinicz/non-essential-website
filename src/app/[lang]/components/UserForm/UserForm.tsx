"use client";

import React from "react";
import cx from "classnames";
import { IoIosSend } from "react-icons/io";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import styles from "./UserForm.module.css";
import { useAutoSizeTextArea } from "./useAutoSizeTextArea";
import { validateEmail } from "./validateEmail";

type PropsType = Readonly<{
  copy: {
    messageLabel: string;
    messagePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailErrorText: string;
    submitButton: string;
    checkboxLabel: string;
  };
}>;

export function UserForm({ copy }: PropsType) {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const [messageValue, setMessageValue] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [exclusiveContentChecked, setExclusiveContentChecked] =
    React.useState(false);

  useAutoSizeTextArea({ ref: textAreaRef, value: messageValue });

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (emailError) {
      setEmailError(false);
    }

    setEmailValue(e.target.value);
  };

  const handleCheckboxKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    setExclusiveContentChecked(!exclusiveContentChecked);
  };

  const handleCheckboxClick = () => {
    setExclusiveContentChecked(!exclusiveContentChecked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(emailValue)) {
      return setEmailError(true);
    }

    console.log("submitting form");
  };

  const isSubmitButtonDisabled = exclusiveContentChecked
    ? !emailValue
    : !messageValue;

  return (
    <form className={styles.userForm} onSubmit={handleSubmit}>
      <div className={styles.userFormInputGroup}>
        <label htmlFor="message">{copy.messageLabel}</label>
        <textarea
          id="message"
          ref={textAreaRef}
          className={styles.userFormInput}
          placeholder={copy.messagePlaceholder}
          rows={1}
          value={messageValue}
          onChange={handleMessageChange}
        ></textarea>
      </div>

      {exclusiveContentChecked && (
        <div className={cx(styles.userFormInputGroup, "fadeIn")}>
          <label htmlFor="email">{copy.emailLabel}</label>
          <input
            id="email"
            className={cx(styles.userFormInput, {
              [styles.userFormInputError]: emailError,
            })}
            placeholder={copy.emailPlaceholder}
            value={emailValue}
            onChange={handleEmailChange}
          ></input>

          {emailError && (
            <div className={styles.userFormInputErrorText}>
              {copy.emailErrorText}
            </div>
          )}
        </div>
      )}

      <div
        onClick={handleCheckboxClick}
        onKeyDown={handleCheckboxKeyDown}
        role="checkbox"
        aria-checked={exclusiveContentChecked}
        tabIndex={0}
        className={styles.userFormCheckbox}
      >
        <div className={styles.userFormCheckboxIcon}>
          {exclusiveContentChecked ? (
            <IoCheckboxOutline size={20} />
          ) : (
            <IoSquareOutline size={20} />
          )}
        </div>
        <label>{copy.checkboxLabel}</label>
      </div>

      <button
        className={styles.submitButton}
        type="submit"
        onClick={handleSubmit}
        disabled={isSubmitButtonDisabled}
      >
        <IoIosSend />
        {copy.submitButton}
      </button>
    </form>
  );
}

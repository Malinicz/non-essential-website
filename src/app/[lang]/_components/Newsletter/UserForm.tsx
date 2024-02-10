"use client";

import React from "react";
import cx from "classnames";
import { IoIosSend } from "react-icons/io";
import {
  IoCheckboxOutline,
  IoSquareOutline,
  IoSyncOutline,
} from "react-icons/io5";
import { validateEmail, wrapTextWithComponent } from "@/utils";
import styles from "./UserForm.module.scss";
import { saveSubscriber } from "@/api/mailerLite";
import Link from "next/link";

export type PropsType = Readonly<{
  onSuccess: () => void;
  copy: {
    emailLabel: string;
    emailPlaceholder: string;
    emailFormattingErrorText: string;
    emailAlreadySubscribedErrorText: string;
    emailGenericErrorText: string;
    submitButton: string;
    checkboxLabel: string;
  };
  privacyPolicyUrl: string;
}>;

export function UserForm({ copy, onSuccess, privacyPolicyUrl }: PropsType) {
  const [emailValue, setEmailValue] = React.useState("");
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [hasOptedIn, setHasOptedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const hasEmailError = Boolean(emailErrorMessage);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (hasEmailError) {
      setEmailErrorMessage("");
    }

    setEmailValue(e.target.value);
  };

  const handleOptInCheckboxKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    setHasOptedIn(!hasOptedIn);
  };

  const handleOptInCheckboxClick = () => {
    setHasOptedIn(!hasOptedIn);
  };

  const handlePrivacyPolicyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(emailValue)) {
      return setEmailErrorMessage(copy.emailFormattingErrorText);
    }

    setLoading(true);

    const result = await saveSubscriber({ email: emailValue, hasOptedIn });

    setLoading(false);

    if (result.statusText === "already_subscribed") {
      return setEmailErrorMessage(copy.emailAlreadySubscribedErrorText);
    }

    if (result.statusText === "error") {
      return setEmailErrorMessage(copy.emailGenericErrorText);
    }

    return onSuccess();
  };

  const isSubmitButtonDisabled = !hasOptedIn || !emailValue;

  return (
    <form className={styles.userForm} onSubmit={handleSubmit} noValidate>
      <div className={cx(styles.userFormInputGroup)}>
        <label htmlFor="email">{copy.emailLabel}</label>
        <input
          id="email"
          type="email"
          className={cx(styles.userFormInput, {
            [styles.userFormInputError]: hasEmailError,
          })}
          placeholder={copy.emailPlaceholder}
          value={emailValue}
          onChange={handleEmailChange}
        ></input>

        {hasEmailError && (
          <div className={styles.userFormInputErrorText}>
            {emailErrorMessage}
          </div>
        )}
      </div>

      <div
        onClick={handleOptInCheckboxClick}
        onKeyDown={handleOptInCheckboxKeyDown}
        role="checkbox"
        aria-checked={hasOptedIn}
        tabIndex={0}
        className={styles.userFormCheckbox}
      >
        <div className={styles.userFormCheckboxIcon}>
          {hasOptedIn ? (
            <IoCheckboxOutline size={20} />
          ) : (
            <IoSquareOutline size={20} />
          )}
        </div>
        <label>
          {wrapTextWithComponent(
            ({ children }: React.PropsWithChildren) => (
              <Link href={privacyPolicyUrl} onClick={handlePrivacyPolicyClick}>
                {children}
              </Link>
            ),
            copy.checkboxLabel
          )}
        </label>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitButtonDisabled}
      >
        {loading ? (
          <IoSyncOutline className={styles.spinning} />
        ) : (
          <IoIosSend />
        )}
        {copy.submitButton}
      </button>
    </form>
  );
}

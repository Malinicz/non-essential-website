"use client";

import React from "react";
import { UserForm, PropsType as UserFormPropsType } from "./UserForm";
import styles from "./Newsletter.module.scss";

export type PropsType = Readonly<{
  privacyPolicyUrl: string;
  copy: {
    title: string;
    description: string;
    titleSuccess: string;
    descriptionSuccess: string;
    form: UserFormPropsType["copy"];
  };
}>;

export function Newsletter({ copy, privacyPolicyUrl }: PropsType) {
  const [success, setSuccess] = React.useState(false);

  const handleSuccess = () => {
    setSuccess(true);
  };

  return (
    <>
      <h2>{success ? copy.titleSuccess : copy.title}</h2>
      <p>{success ? copy.descriptionSuccess : copy.description}</p>

      {!success && (
        <div className={styles.form}>
          <UserForm
            copy={copy.form}
            onSuccess={handleSuccess}
            privacyPolicyUrl={privacyPolicyUrl}
          />
        </div>
      )}
    </>
  );
}

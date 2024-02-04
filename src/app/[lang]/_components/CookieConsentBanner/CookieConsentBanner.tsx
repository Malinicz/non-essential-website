"use client";

import React from "react";
import Link from "next/link";
import cx from "classnames";
import { IoCloseCircleOutline } from "react-icons/io5";
import { DictionaryType } from "@/get-dictionary";
import { wrapTextWithComponent } from "@/utils";
import styles from "./CookieConsentBanner.module.scss";

const LOCAL_STORAGE_KEY = "cookie-consent-banner-closed";

type PropsType = Readonly<{
  copy: DictionaryType;
  privacyPolicyUrl: string;
}>;

export function CookieConsentBanner({ copy, privacyPolicyUrl }: PropsType) {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(LOCAL_STORAGE_KEY, "true");
  };

  React.useEffect(() => {
    setIsVisible(!localStorage.getItem(LOCAL_STORAGE_KEY));
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={cx(styles.container, "gap-x-s")}>
      <div>
        {wrapTextWithComponent(
          ({ children }: React.PropsWithChildren) => (
            <Link href={privacyPolicyUrl} className={styles.link}>
              {children}
            </Link>
          ),
          copy.cookieConsentText
        )}
      </div>
      <button onClick={handleClose} className={styles.closeButton}>
        <IoCloseCircleOutline size={25} />
      </button>
    </div>
  );
}

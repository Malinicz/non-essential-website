"use client";

import cx from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/i18n-config";
import styles from "./LocaleSwitcher.module.scss";

export function LocaleSwitcher() {
  const pathname = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <ul className={styles.list}>
      {i18n.locales.map((locale) => {
        const isActive = pathname.startsWith(`/${locale}/`);

        return (
          <li key={locale} className={styles.listItem}>
            <Link
              href={redirectedPathName(locale)}
              className={cx({ [styles.activeLocale]: isActive })}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

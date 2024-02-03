"use client";

import Link from "next/link";
import cx from "classnames";
import { usePathname } from "next/navigation";
import { IoNavigateOutline } from "react-icons/io5";
import { getMenuItemsList } from "@/utils";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import styles from "./Navigation.module.scss";
type PropsType = Readonly<{
  locale: Locale;
  copy: Awaited<ReturnType<typeof getDictionary>>;
}>;

export function Navigation({ locale, copy }: PropsType) {
  const navigationList = getMenuItemsList({ locale, dictionary: copy });
  const pathname = usePathname();

  return (
    <nav>
      <ul className={styles.navigationList}>
        {navigationList.map((item) => {
          const isActive = pathname === item.url;

          return (
            <li key={item.id} className={styles.navigationListItem}>
              {isActive && (
                <IoNavigateOutline className={styles.activeLinkIcon} />
              )}

              <Link
                key={item.id}
                href={item.url}
                className={cx({ [styles.linkActive]: isActive })}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

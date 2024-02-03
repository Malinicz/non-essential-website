"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IoRemove, IoAdd } from "react-icons/io5";
import cx from "classnames";
import { Locale } from "@/i18n-config";
import { DictionaryType, getDictionary } from "@/get-dictionary";
import styles from "./MobileNavigation.module.scss";
import { Navigation } from ".";
import { LocaleSwitcher } from "..";

type PropsType = Readonly<{
  locale: Locale;
  copy: DictionaryType;
}>;

export function MobileNavigation({ locale, copy }: PropsType) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <LocaleSwitcher />
      <div className={cx(styles.menuButtonContainer, "gap-x-xxs")}>
        {isMenuOpen ? <IoRemove /> : <IoAdd />}
        <button onClick={toggleMenu} className={styles.menuButton}>
          MENU
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.menu}>
          <Navigation locale={locale} copy={copy} />
        </div>
      )}
    </div>
  );
}

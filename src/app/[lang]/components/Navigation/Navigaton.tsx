import Link from "next/link";
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

  return (
    <nav>
      <ul className={styles.navigationList}>
        {navigationList.map((item) => (
          <li key={item.id} className={styles.navigationListItem}>
            <Link key={item.id} href={item.url}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

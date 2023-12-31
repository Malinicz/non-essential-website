import type { Metadata } from "next";
import cx from "classnames";
import { Locale, i18n } from "@/i18n-config";
import { futuraFont, antonFont } from "@/fonts";
import { getDictionary } from "@/get-dictionary";
import styles from "./layout.module.css";
import "./globals.css";
import { LocaleSwitcher } from "./components";

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  return {
    title: dictionary.websiteTitle,
    description: dictionary.websiteDescription,
    icons: {
      icon: "./favicon.ico",
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

type PropsType = Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>;

export default function RootLayout({ children, params }: PropsType) {
  const currentYear = new Date().getFullYear();

  return (
    <html
      lang={params.lang}
      className={cx(futuraFont.variable, antonFont.variable)}
    >
      <body>
        <div className={styles.layout}>
          <header className={styles.header}>
            <LocaleSwitcher />
          </header>
          <aside className={styles.aside}>NON-ESSENTIAL WORKERS</aside>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>ⓒ N.E.W. {currentYear}</footer>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Locale, i18n } from "@/i18n-config";
import { futuraFont, antonFont } from "@/fonts";
import { getDictionary } from "@/get-dictionary";
import styles from "./layout.module.scss";
import "./globals.scss";
import { LocaleSwitcher } from "./components";
import { getNavigation } from "@/utils";
import { MobileNavigation, Navigation } from "./components/Navigation";
import { CookieConsentBanner } from "./components/CookieConsentBanner";

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

export default async function RootLayout({ children, params }: PropsType) {
  const currentYear = new Date().getFullYear();
  const dictionary = await getDictionary(params.lang);
  const navigation = getNavigation({ locale: params.lang });

  return (
    <html
      lang={params.lang}
      className={cx(futuraFont.variable, antonFont.variable)}
    >
      <body>
        <div className={styles.layout}>
          <div className={styles.topSection}>
            <LocaleSwitcher />
          </div>
          <div className="gap-y-l">
            <header className={styles.header}>
              <Link href={navigation.home.url} className={styles.homeLink}>
                NON-ESSENTIAL WORKERS
              </Link>
            </header>
            <aside className={styles.aside}>
              <Navigation locale={params.lang} copy={dictionary} />
            </aside>
          </div>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            <div className={styles.cookieConsentContainer}>
              <CookieConsentBanner
                copy={dictionary}
                privacyPolicyUrl={navigation.privacyPolicy.url}
              />
            </div>
            <div className={styles.footerCopyright}>ⓒ N.E.W. {currentYear}</div>
            <div className={styles.footerNavigation}>
              <MobileNavigation locale={params.lang} copy={dictionary} />
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

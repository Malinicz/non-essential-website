import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Locale, i18n } from "@/i18n-config";
import { mainFont, headerFont } from "@/fonts";
import { getDictionary } from "@/get-dictionary";
import { getNavigation } from "@/utils";
import styles from "./layout.module.scss";
import "./globals.scss";
import {
  LocaleSwitcher,
  LazyPlayer,
  MobileNavigation,
  Navigation,
  CookieConsentBanner,
  SocialMediaButtons,
} from "./_components";

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  return {
    title: dictionary.meta.websiteTitle,
    description: dictionary.meta.websiteDescription,
    icons: {
      icon: "/favicon.ico",
    },
    metadataBase: new URL("https://nonessentialworkers.com"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        pl: "/pl",
      },
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
      className={cx(mainFont.variable, headerFont.variable)}
    >
      <body>
        <div className={styles.bodyBackground} />
        <div className={styles.layout}>
          <div className={cx(styles.topSection, "gap-x-l")}>
            <LazyPlayer copy={dictionary.player} />
            <LocaleSwitcher />
          </div>
          <div className={cx(styles.navigationSection, "gap-y-l")}>
            <div className={cx(styles.linksSection, "gap-y-l")}>
              <header className={styles.header}>
                <Link href={navigation.home.url} className={styles.homeLink}>
                  NON-ESSENTIAL WORKERS
                </Link>
              </header>
              <aside className={styles.aside}>
                <Navigation locale={params.lang} copy={dictionary} />
              </aside>
            </div>
            <div className={styles.socialMediaSection}>
              <SocialMediaButtons />
            </div>
          </div>
          <main className={styles.main}>
            <div className={styles.mainBackground} />
            {children}
          </main>
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

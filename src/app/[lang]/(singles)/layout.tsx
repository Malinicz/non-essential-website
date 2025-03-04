import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Locale } from "@/i18n-config";
import { mainFont, headerFont } from "@/fonts";
import { getDictionary } from "@/get-dictionary";
import "./globals.scss";

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
    robots: {
      index: false,
      follow: false,
    },
  };
}

type PropsType = Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>;

export default async function RootLayout({ children, params }: PropsType) {
  return (
    <html
      lang={params.lang}
      className={cx(mainFont.variable, headerFont.variable)}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

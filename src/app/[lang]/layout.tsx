import type { Metadata, ResolvingMetadata } from "next";
import cx from "classnames";
import { Locale, i18n } from "@/i18n-config";
import { futuraFont, antonFont } from "@/fonts";
import { getDictionary } from "@/get-dictionary";
import "./globals.css";

export async function generateMetadata(
  { params }: PropsType,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  return {
    title: dictionary["server-component"].title,
    description: dictionary["server-component"].description,
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
  return (
    <html
      lang={params.lang}
      className={cx(futuraFont.variable, antonFont.variable)}
    >
      <body>{children}</body>
    </html>
  );
}

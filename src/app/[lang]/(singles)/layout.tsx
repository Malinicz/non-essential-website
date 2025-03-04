import React from "react";
import { Locale } from "@/i18n-config";
import { mainFont } from "@/fonts";

type PropsType = Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>;

export default function ComplainLayout({ children, params }: PropsType) {
  return (
    <html lang={params.lang} className={mainFont.variable}>
      <body>{children}</body>
    </html>
  );
}

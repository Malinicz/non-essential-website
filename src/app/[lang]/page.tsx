import Image from "next/image";
import styles from "./page.module.css";
import LocaleSwitcher from "./components/locale-switcher";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main>
      <h1>Hello, Next.js!</h1>
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      <LocaleSwitcher />
    </main>
  );
}

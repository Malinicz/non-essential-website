import Image from "next/image";
import styles from "./page.module.css";
import { LocaleSwitcher, BandCampPlugin } from "./components";
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
      <h1>N.E.W. IMPOSSIBLE SINGLE FROM DEBUT EP OUT NOW</h1>
      <h2>HEY YOU! LISTEN...</h2>
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      <LocaleSwitcher />
      <BandCampPlugin album="impossible" />
    </main>
  );
}

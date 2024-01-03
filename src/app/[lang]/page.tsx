import React from "react";
import styles from "./page.module.scss";
import { BandCampPlugin } from "./components";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { StreamingServicesList } from "./components/StreamingServicesList";
import { Newsletter } from "./components/Newsletter";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className={styles.mainLayout}>
      <div className={styles.heading}>
        <h1>{dictionary.home.heading}</h1>
      </div>
      <div className={styles.column1}>
        <section>
          <h2>{dictionary.home.streamingServicesTitle}</h2>
          <p>{dictionary.home.streamingServicesDescription}</p>
          <StreamingServicesList />
        </section>
        <section>
          <Newsletter copy={dictionary.home.newsletter} />
        </section>
      </div>
      <div className={styles.column2}>
        <BandCampPlugin album="impossible" />
      </div>
    </div>
  );
}

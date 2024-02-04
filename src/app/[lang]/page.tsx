import React from "react";
import styles from "./page.module.scss";
import {
  BandCampPlugin,
  StreamingServicesList,
  Newsletter,
} from "./_components";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { getNavigation } from "@/utils";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const navigation = getNavigation({ locale: lang });

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
          <Newsletter
            copy={dictionary.home.newsletter}
            privacyPolicyUrl={navigation.privacyPolicy.url}
          />
        </section>
      </div>
      <div className={styles.column2}>
        <BandCampPlugin album="impossible" size="large" />
      </div>
    </div>
  );
}

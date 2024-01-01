import React from "react";
import cx from "classnames";
import styles from "./page.module.css";
import { BandCampPlugin } from "./components";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { StreamingServicesList } from "./components/StreamingServicesList";
import { UserForm } from "./components/UserForm";

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
          <h2>{dictionary.home.subheading1}</h2>
          <p>{dictionary.home.streamingServicesDescription}</p>
          <StreamingServicesList />
        </section>
        <section>
          <div className={styles.formSectionText}>
            <h2>{dictionary.home.subheading2}</h2>
            <p>{dictionary.home.userFormDescription}</p>
          </div>
          <UserForm copy={dictionary.home.form} />
        </section>
      </div>
      <div className={styles.column2}>
        <BandCampPlugin album="impossible" />
      </div>
    </div>
  );
}

import React from "react";
import cx from "classnames";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { BandCampPlugin } from "../_components";
import styles from "./page.module.scss";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="gap-y-m">
      <div>
        <h1>{dictionary.music.heading}</h1>
        <h2>{dictionary.music.singles.heading}</h2>
      </div>
      <div className={cx(styles.bandCampPluginSmall, "gap-y-s")}>
        {["impossible" as const, "fire" as const, "people" as const].map(
          (name) => (
            <BandCampPlugin key={name} album={name} size="small" />
          )
        )}
      </div>
      <div className={cx(styles.bandCampPluginLarge, "gap-y-m")}>
        {["impossible" as const, "fire" as const, "people" as const].map(
          (name) => (
            <BandCampPlugin key={name} album={name} size="large" />
          )
        )}
      </div>
    </div>
  );
}

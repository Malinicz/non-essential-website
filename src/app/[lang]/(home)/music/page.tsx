import React from "react";
import cx from "classnames";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { BandCampPlugin, StreamingServicesList } from "../../_components";
import styles from "./page.module.scss";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <section>
        <h1>{dictionary.music.heading}</h1>
        <p>{dictionary.music.streamingServicesDescription}</p>
        <StreamingServicesList />
      </section>

      <section className="gap-y-s">
        <h2>{dictionary.music.albums.heading}</h2>
        <div className={cx(styles.bandCampPluginSmall, "gap-y-s")}>
          {["firstShift" as const].map((name) => (
            <BandCampPlugin key={name} album={name} size="small" />
          ))}
        </div>
        <div className={cx(styles.bandCampPluginLarge, "gap-y-s")}>
          {["firstShift" as const].map((name) => (
            <BandCampPlugin
              key={name}
              album={name}
              size="large"
              multipleSongs
            />
          ))}
        </div>
        <h2>{dictionary.music.singles.heading}</h2>
        <div className={cx(styles.bandCampPluginSmall, "gap-y-s")}>
          {[
            "comePlain" as const,
            "impossible" as const,
            "fire" as const,
            "people" as const,
          ].map((name) => (
            <BandCampPlugin key={name} album={name} size="small" />
          ))}
        </div>
        <div className={cx(styles.bandCampPluginLarge, "gap-y-m")}>
          {["impossible" as const, "fire" as const, "people" as const].map(
            (name) => (
              <BandCampPlugin key={name} album={name} size="large" />
            )
          )}
        </div>
      </section>
    </div>
  );
}

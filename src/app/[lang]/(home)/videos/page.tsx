import React from "react";
import cx from "classnames";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { YouTubePlugin } from "../../_components";
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
        <h1>{dictionary.videos.heading}</h1>
        <p>{dictionary.videos.description}</p>
      </section>
      <section className="gap-y-l">
        {[
          "comePlain" as const,
          "liveStudioCentrum" as const,
          "weight" as const,
          "impossible" as const,
          "fire" as const,
          "people" as const,
        ].map((song) => (
          <YouTubePlugin key={song} song={song} />
        ))}
      </section>
    </div>
  );
}

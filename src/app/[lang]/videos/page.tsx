import React from "react";
import cx from "classnames";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { YouTubePlugin } from "../_components";
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
        <h1>{dictionary.videos.heading}</h1>
      </div>
      <div className="gap-y-l">
        {["impossible" as const, "fire" as const, "people" as const].map(
          (song) => (
            <YouTubePlugin key={song} song={song} />
          )
        )}
      </div>
    </div>
  );
}

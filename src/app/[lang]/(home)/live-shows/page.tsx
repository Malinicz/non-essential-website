import React from "react";
import cx from "classnames";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
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
        <h1>{dictionary.liveShows.heading}</h1>
        <ul>
          {dictionary.liveShows.upcomingShows.map((show) => (
            <li key={show.id}>
              {show.date} {show.venue}, {show.city}, {show.country} |{" "}
              <a href={show.ticketsUrl} target="_blank">
                {dictionary.liveShows.getTicketsCTA}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

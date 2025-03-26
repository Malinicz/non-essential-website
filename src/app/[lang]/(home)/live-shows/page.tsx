import React from "react";
import cx from "classnames";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import styles from "./page.module.scss";
import { formatDate, isDateInThePast } from "@/utils/dateUtils";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  const hasUpcomingShows = dictionary.liveShows.upcomingShows.some(
    (show) => isDateInThePast(show.date) === false
  );

  return (
    <div>
      <section>
        <h1>{dictionary.liveShows.heading}</h1>
        {hasUpcomingShows ? (
          <ul>
            {dictionary.liveShows.upcomingShows.map((show) => (
              <li key={show.id}>
                {formatDate(show.date, lang)}{" "}
                <a href={show.coordinates} target="_blank">
                  {show.venue}
                </a>
                , {show.street}, {show.city}, {show.country} |{" "}
                <a href={show.ticketsUrl} target="_blank">
                  {dictionary.liveShows.getTicketsCTA}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>{dictionary.liveShows.noUpcomingShows}</p>
        )}
      </section>
    </div>
  );
}

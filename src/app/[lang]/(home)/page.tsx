import React from "react";
import styles from "./page.module.scss";
import {
  BandCampPlugin,
  StreamingServicesList,
  Newsletter,
} from "../_components";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { getNavigation } from "@/utils";
import { formatDate, isDateInThePast } from "@/utils/dateUtils";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const navigation = getNavigation({ locale: lang });

  const newsletterCopy = {
    ...dictionary.newsletter,
    title: dictionary.home.newsletterTitle,
  };

  const hasUpcomingShows = dictionary.liveShows.upcomingShows.some(
    (show) => isDateInThePast(show.date) === false
  );

  console.log(
    ">>> hasUpcomingShows",
    hasUpcomingShows,
    dictionary.liveShows.upcomingShows,
    isDateInThePast(dictionary.liveShows.upcomingShows[0].date)
  );

  return (
    <div className={styles.mainLayout}>
      <div className={styles.heading}>
        <h1>{dictionary.home.heading}</h1>
      </div>
      <div className={styles.column1}>
        {hasUpcomingShows && (
          <section>
            <h2>{dictionary.home.upcomingShowTitle}</h2>
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
          </section>
        )}
        <section>
          <h2>{dictionary.home.streamingServicesTitle}</h2>
          <p>{dictionary.home.streamingServicesDescription}</p>
          <StreamingServicesList />
        </section>
        <section>
          <Newsletter
            copy={newsletterCopy}
            privacyPolicyUrl={navigation.privacyPolicy.url}
          />
        </section>
      </div>
      <div className={styles.column2}>
        <BandCampPlugin album="comePlain" size="large" multipleSongs />
      </div>
    </div>
  );
}

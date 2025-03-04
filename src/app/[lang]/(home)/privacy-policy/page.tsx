import React from "react";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

const LAST_UPDATED = "2024-01-04";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <h1>{dictionary.privacyPolicy.title}</h1>
      <section>
        <p>
          <strong>{`${dictionary.privacyPolicy.lastUpdated}: ${LAST_UPDATED}`}</strong>
        </p>
        <p>{dictionary.privacyPolicy.description}</p>
      </section>

      {dictionary.privacyPolicy.sections.map((section, index) => {
        return (
          <section key={index}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </section>
        );
      })}
    </>
  );
}

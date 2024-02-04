import React from "react";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import styles from "./page.module.scss";
import bioPhotoSrc from "../_assets/bio_photo.jpg";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className={styles.mainLayout}>
      <div className={styles.heading}>
        <h1>{dictionary.bio.heading}</h1>
      </div>
      <div className={styles.column1}>
        <section>
          <h2>{dictionary.bio.section1.heading}</h2>
          <div className="gap-y-m">
            <p>{dictionary.bio.section1.paragraphs.paragraph1}</p>
            <Image
              src={bioPhotoSrc}
              alt={dictionary.bio.section1.photoAltText}
              className={styles.photo}
              loading="lazy"
            />
          </div>
        </section>
      </div>
      <div className={styles.column2}>
        <h2>{dictionary.bio.section2.heading}</h2>
        <p>{dictionary.bio.section2.paragraphs.paragraph1}</p>
        <p>
          {dictionary.bio.section2.paragraphs.paragraph2
            .split("[html]")
            .map((text) => (
              <>
                {text}
                <br />
              </>
            ))}
        </p>
        <p>{dictionary.bio.section2.paragraphs.paragraph3}</p>
        <p>{dictionary.bio.section2.paragraphs.paragraph4}</p>
        <p>{dictionary.bio.section2.paragraphs.paragraph5}</p>
      </div>
    </div>
  );
}

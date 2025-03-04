import React from "react";
import cx from "classnames";
import Head from "next/head";
import {
  IoDocumentOutline,
  IoImagesOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
  IoMusicalNotesOutline,
  IoImageOutline,
} from "react-icons/io5";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { getAssetsUrls, getMusicAssetsList, socialMedia } from "@/utils";
import { CopyButton, ExpandableList } from "../../_components";
import styles from "./page.module.scss";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const assetsUrls = getAssetsUrls();
  const musicAssetsList = getMusicAssetsList();

  const musicAssetsElements = musicAssetsList.map((item) => {
    return (
      <div key={item.name} className="gap-y-xs">
        <div className={cx(styles.item, "gap-x-xs")}>
          {item.type === "album" ? (
            <IoDocumentOutline size={20} />
          ) : (
            <IoMusicalNotesOutline size={20} />
          )}
          <a href={item.mp3} download>
            {item.name}{" "}
            {item.type === "album"
              ? `(${dictionary.resources.compressed} .mp3)`
              : "(.mp3)"}
          </a>
        </div>
        {item.mp3Censored && (
          <div className={cx(styles.item, "gap-x-xs")}>
            <IoMusicalNotesOutline size={20} />
            <a href={item.mp3Censored} download>
              {item.name} ({dictionary.resources.censored} .mp3)
            </a>
          </div>
        )}
        <div className={cx(styles.item, "gap-x-xs")}>
          {item.type === "album" ? (
            <IoDocumentOutline size={20} />
          ) : (
            <IoMusicalNotesOutline size={20} />
          )}
          <a href={item.wav} download>
            {item.name}{" "}
            {item.type === "album"
              ? `(${dictionary.resources.compressed} .wav)`
              : "(.wav)"}
          </a>
        </div>
        {item.wavCensored && (
          <div className={cx(styles.item, "gap-x-xs")}>
            <IoMusicalNotesOutline size={20} />
            <a href={item.wavCensored} download>
              {item.name} ({dictionary.resources.censored} .wav)
            </a>
          </div>
        )}
        <div className={cx(styles.item, "gap-x-xs")}>
          {item.type === "album" ? (
            <IoDocumentOutline size={20} />
          ) : (
            <IoMusicalNotesOutline size={20} />
          )}
          <a href={item.wav24bit} download>
            {item.name}{" "}
            {item.type === "album"
              ? `(${dictionary.resources.compressed} .wav 24bit)`
              : "(.wav 24bit)"}
          </a>
        </div>
        {item.wav24bitCensored && (
          <div className={cx(styles.item, "gap-x-xs")}>
            <IoMusicalNotesOutline size={20} />
            <a href={item.wav24bitCensored} download>
              {item.name} ({dictionary.resources.censored} .wav 24bit)
            </a>
          </div>
        )}
        {item.albumCover && (
          <div className={cx(styles.item, "gap-x-xs")}>
            <IoImageOutline size={20} />
            <a href={item.albumCover} download>
              {item.name} ({dictionary.resources.music.albumCover} .jpg)
            </a>
          </div>
        )}
      </div>
    );
  });

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <div className={styles.mainLayout}>
        <div className={styles.heading}>
          <h1>{dictionary.resources.heading}</h1>
        </div>
        <div className={styles.column1}>
          <section>
            <p>{dictionary.resources.description}</p>
          </section>
          <section>
            <h2>{dictionary.resources.music.heading}</h2>
            <div className="gap-y-m">
              <p>{dictionary.resources.music.description}</p>
              <ExpandableList
                list={musicAssetsElements}
                initialItemsCount={1}
                copy={dictionary.expandableList}
              />
            </div>
          </section>
          <section>
            <div className={cx(styles.headerWithButtonContainer, "gap-x-s")}>
              <h2>{dictionary.resources.bio.heading}</h2>
              <div className={styles.copyButtonContainer}>
                <CopyButton
                  copy={dictionary.copyButton}
                  text={Object.values(dictionary.resources.bio.paragraphs).join(
                    "\n\n"
                  )}
                />
              </div>
            </div>
            {Object.values(dictionary.resources.bio.paragraphs).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
          <section>
            <h2>{dictionary.resources.photos.heading}</h2>
            <div className={cx(styles.item, "gap-x-xs")}>
              <IoImagesOutline size={20} />
              <a href={assetsUrls.photos.pressPack} download>
                {dictionary.resources.photos.pressPack}
              </a>
            </div>
          </section>
          <section>
            <h2>{dictionary.resources.videos.heading}</h2>
            <div className={cx(styles.item, "gap-x-xs")}>
              <IoLogoYoutube size={20} />
              <a
                href={socialMedia.youTube.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dictionary.resources.videos.youTubeChannel}
              </a>
            </div>
          </section>
          <section>
            <h2>{dictionary.resources.socialMedia.heading}</h2>
            <div className="gap-y-xs">
              <div className={cx(styles.item, "gap-x-xs")}>
                <IoLogoInstagram size={20} />
                <a
                  href={socialMedia.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialMedia.instagram.name}
                </a>
              </div>
              <div className={cx(styles.item, "gap-x-xs")}>
                <IoLogoFacebook size={20} />
                <a
                  href={socialMedia.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialMedia.facebook.name}
                </a>
              </div>
            </div>
          </section>
        </div>
        {/* <div className={styles.column2}>
          <div className={styles.videoContainer}>
            <div className={styles.videoPlaceholder}>
              <div>video placeholder</div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

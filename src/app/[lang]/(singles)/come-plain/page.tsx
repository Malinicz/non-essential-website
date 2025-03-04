import Image from "next/image";
import cx from "classnames";
import {
  IoImageOutline,
  IoMusicalNotesOutline,
  IoArrowForward,
  IoArrowBack,
} from "react-icons/io5";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { getAssetsUrls, getNavigation } from "@/utils";
import albumCover from "./come-plain-cover.jpg";
import styles from "./page.module.scss";
import { ExpandableText } from "../../_components";
import { Viewport } from "next";
import Link from "next/link";

export const viewport: Viewport = {
  themeColor: "black",
};

type PropsType = {
  params: { lang: Locale };
};

export default async function ComePlainPage({ params }: PropsType) {
  const dictionary = await getDictionary(params.lang);
  const navigation = getNavigation({ locale: params.lang });
  const item = getAssetsUrls().music.comePlain;

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.header}>
          <div>
            <h1>{dictionary.singles.comePlain.title}</h1>
            <p>{dictionary.singles.comePlain.description}</p>
          </div>
          <div className={styles.homePageContainer}>
            <Link href={navigation.home.url} className={styles.homePageLink}>
              <IoArrowBack className={styles.homePageLinkIconBack} />
              {dictionary.singles.homePageLink}
              <IoArrowForward className={styles.homePageLinkIconForward} />
            </Link>
          </div>
        </div>
        <div className={styles.left}>
          <section>
            <h2>{dictionary.singles.comePlain.listen.title}</h2>
            <div>
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2046761152%3Fsecret_token%3Ds-udIhETRNDUF&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </div>
          </section>
          <section>
            <h2>{dictionary.singles.comePlain.about.title}</h2>
            <p>{dictionary.singles.comePlain.about.description}</p>
          </section>
          <section>
            <h2>{dictionary.singles.comePlain.download.title}</h2>

            <div className="gap-y-xs">
              <div className={cx(styles.item, "gap-x-xs")}>
                <IoMusicalNotesOutline size={20} />
                <a href={item.mp3} download>
                  {item.name}
                  {" (.mp3)"}
                </a>
              </div>
              <div className={cx(styles.item, "gap-x-xs")}>
                <IoMusicalNotesOutline size={20} />
                <a href={item.wav} download>
                  {item.name}
                  {" (.wav)"}
                </a>
              </div>
              <div className={cx(styles.item, "gap-x-xs")}>
                <IoMusicalNotesOutline size={20} />
                <a href={item.wav24bit} download>
                  {item.name}
                  {" (.wav 24bit)"}
                </a>
              </div>
              {item.albumCover && (
                <div className={cx(styles.item, "gap-x-xs")}>
                  <IoImageOutline size={20} />
                  <a href={item.albumCover} download>
                    {item.name} ({dictionary.resources.music.albumCover} .jpg)
                  </a>
                </div>
              )}
            </div>
          </section>
          <section>
            <h2>{dictionary.singles.comePlain.lyrics.title}</h2>
            <ExpandableText
              text={dictionary.singles.comePlain.lyrics.text}
              copy={{
                showMore: dictionary.expandableList.showMoreButton,
                showLess: dictionary.expandableList.showLessButton,
              }}
            />
          </section>
        </div>
        <div className={styles.right}>
          <Image
            className={styles.albumCover}
            src={albumCover}
            alt={dictionary.singles.comePlain.albumCoverAlt}
            priority
          />
        </div>
      </div>
    </div>
  );
}

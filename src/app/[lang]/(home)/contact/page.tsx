import React from "react";
import cx from "classnames";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import styles from "./page.module.scss";
import { CopyButton, Newsletter } from "../../_components";
import { getNavigation } from "@/utils";
import {
  IoLogoFacebook,
  // IoLogoTiktok,
  IoLogoInstagram,
  IoMailOutline,
} from "react-icons/io5";
import { socialMedia } from "@/utils";

const EMAIL = "nonessentialworkers@gmail.com";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const navigation = getNavigation({ locale: lang });

  return (
    <div>
      <section>
        <h1>{dictionary.contact.heading}</h1>
        <p>{dictionary.contact.paragraphs.paragraph1}</p>
        <div className={cx(styles.contactInfo, "gap-y-s")}>
          <div className={cx(styles.contactInfoItem, "gap-x-xs")}>
            <IoMailOutline size={25} />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <CopyButton copy={dictionary.copyButton} text={EMAIL} />
          </div>
          <div className={cx(styles.contactInfoItem, "gap-x-xs")}>
            <IoLogoInstagram size={25} />
            <a
              href={socialMedia.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialMedia.instagram.name}
            </a>
          </div>
          <div className={cx(styles.contactInfoItem, "gap-x-xs")}>
            <IoLogoFacebook size={25} />
            <a
              href={socialMedia.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialMedia.facebook.name}
            </a>
          </div>
          {/* <div className={cx(styles.contactInfoItem, "gap-x-xs")}>
            <IoLogoTiktok size={25} />
            <a
              href={socialMedia.tikTok.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialMedia.tikTok.name}
            </a>
          </div> */}
        </div>
      </section>
      <section>
        <Newsletter
          copy={dictionary.newsletter}
          privacyPolicyUrl={navigation.privacyPolicy.url}
        />
      </section>
    </div>
  );
}

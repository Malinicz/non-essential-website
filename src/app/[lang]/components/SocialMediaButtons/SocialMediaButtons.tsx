import Image from "next/image";
import cx from "classnames";
import bandCampIcon from "./assets/bandcamp-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";
import soundCloudIcon from "./assets/soundcloud-icon.svg";
import styles from "./SocialMediaButtons.module.scss";
import { socialMedia, streamingServices } from "@/utils";

const SOCIAL_MEDIA_BUTTONS_LIST = [
  { ...streamingServices.bandcamp, icon: bandCampIcon },
  { ...socialMedia.instagram, icon: instagramIcon },
  { ...streamingServices.soundCloud, icon: soundCloudIcon },
];

export function SocialMediaButtons() {
  return (
    <div className={cx(styles.container, "gap-x-xs")}>
      {SOCIAL_MEDIA_BUTTONS_LIST.map((s) => (
        <a
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          key={s.name}
          className={styles.socialMediaLink}
        >
          <button className={styles.socialMediaButton}>
            <Image
              src={s.icon}
              alt={s.name}
              className={styles.socialMediaIcon}
            />
          </button>
        </a>
      ))}
    </div>
  );
}

"use client";

import styles from "./BandCampPlugin.module.css";

const ALBUM_URL = {
  impossible:
    "https://bandcamp.com/EmbeddedPlayer/track=2895797269/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
  fire: "https://bandcamp.com/EmbeddedPlayer/track=2836393470/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
  people:
    "https://bandcamp.com/EmbeddedPlayer/track=1168130426/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",
};

type PropsType = Readonly<{
  album: keyof typeof ALBUM_URL;
}>;

export function BandCampPlugin({ album }: PropsType) {
  if (!album) return null;

  return (
    <iframe className={styles.container} src={ALBUM_URL[album]} seamless />
  );
}

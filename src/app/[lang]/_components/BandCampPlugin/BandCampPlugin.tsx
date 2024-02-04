import cx from "classnames";
import styles from "./BandCampPlugin.module.scss";

type PropsType = Readonly<{
  album: "impossible" | "fire" | "people";
  size?: "small" | "large";
}>;

export function BandCampPlugin({ album, size }: PropsType) {
  if (!album) return null;

  const albums = {
    impossible: `https://bandcamp.com/EmbeddedPlayer/track=2895797269/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=${size}/transparent=true/`,
    fire: `https://bandcamp.com/EmbeddedPlayer/track=2836393470/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=${size}/transparent=true/`,
    people: `https://bandcamp.com/EmbeddedPlayer/track=1168130426/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=${size}/transparent=true/`,
  };

  return (
    <iframe
      className={cx({
        [styles.containerLarge]: size === "large",
        [styles.containerSmall]: size === "small",
      })}
      src={albums[album]}
      seamless
    />
  );
}

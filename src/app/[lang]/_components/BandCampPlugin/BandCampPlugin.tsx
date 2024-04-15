import cx from "classnames";
import styles from "./BandCampPlugin.module.scss";

type PropsType = Readonly<{
  album: "impossible" | "fire" | "people" | "firstShift";
  size: "small" | "large";
  multipleSongs?: boolean;
}>;

export function BandCampPlugin({ album, size, multipleSongs }: PropsType) {
  if (!album) return null;

  const albums = {
    firstShift: `https://bandcamp.com/EmbeddedPlayer/album=3409098269/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=${size}/transparent=true/`,
    impossible: `https://bandcamp.com/EmbeddedPlayer/track=2895797269/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=${size}/transparent=true/`,
    fire: `https://bandcamp.com/EmbeddedPlayer/track=2836393470/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=${size}/transparent=true/`,
    people: `https://bandcamp.com/EmbeddedPlayer/track=1168130426/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=${size}/transparent=true/`,
  };

  return (
    <div
      className={cx({
        [styles.containerLarge]: size === "large",
        [styles.containerSmall]: size === "small",
        [styles.containerMultipleSongs]: multipleSongs,
      })}
    >
      <iframe src={albums[album]} seamless />
    </div>
  );
}

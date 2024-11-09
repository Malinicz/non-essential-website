import styles from "./YouTubePlugin.module.scss";

type PropsType = Readonly<{
  song: "liveStudioCentrum" | "impossible" | "fire" | "people";
}>;

export function YouTubePlugin({ song }: PropsType) {
  if (!song) return null;

  const songs = {
    liveStudioCentrum:
      "https://www.youtube.com/embed/uXA4TYmWsG8?si=-cUp3LwJaiR_Xq_q",
    impossible: `https://www.youtube.com/embed/Z2rRyiIFPsM?si=QhMfGcdGfWtd_NY-&amp;controls=0`,
    fire: `https://www.youtube.com/embed/NeO6RRLQBP4?si=usSVp4_8Tm5s4Ia4&amp;controls=0`,
    people: `https://www.youtube.com/embed/XcXob7cqvZA?si=6-ludJ6JeNB27Cuf&amp;controls=0`,
  };

  return (
    <div className={styles.container}>
      <iframe
        className={styles.video}
        src={songs[song]}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

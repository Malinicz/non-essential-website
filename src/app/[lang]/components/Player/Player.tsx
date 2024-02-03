"use client";

import React from "react";
import cx from "classnames";
import styles from "./Player.module.scss";
import {
  IoPlaySkipForward,
  IoPlaySkipBack,
  IoPlay,
  IoPause,
  IoSyncOutline,
} from "react-icons/io5";
import impossibleSrc from "./assets/impossible_compressed.mp3";
import fireSrc from "./assets/fire_compressed.mp3";
import peopleSrc from "./assets/people_compressed.mp3";

const SONGS = [
  { name: "impossible", src: impossibleSrc },
  { name: "fire", src: fireSrc },
  { name: "people", src: peopleSrc },
];

function Player() {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [activeSongIndex, setActiveSongIndex] = React.useState(0);

  const activeAudio = SONGS[activeSongIndex];

  const handleNext = React.useCallback(() => {
    if (activeSongIndex === SONGS.length - 1) {
      setActiveSongIndex(0);
    } else {
      setActiveSongIndex(activeSongIndex + 1);
    }

    setLoading(true);
  }, [activeSongIndex]);

  const handlePrevious = React.useCallback(() => {
    if (activeSongIndex === 0) {
      setActiveSongIndex(SONGS.length - 1);
    } else {
      setActiveSongIndex(activeSongIndex - 1);
    }

    setLoading(true);
  }, [activeSongIndex]);

  const togglePlayPause = React.useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }

    setPlaying(!playing);
  }, [playing]);

  const handleCanPlayThrough = React.useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  React.useEffect(() => {
    if (playing) {
      audioRef.current?.play();
    }
  }, [activeSongIndex, playing]);

  return (
    <div className={styles.container}>
      <audio
        src={activeAudio.src}
        ref={audioRef}
        preload="auto"
        onCanPlayThrough={handleCanPlayThrough}
        onEnded={handleNext}
      />
      <div className={styles.songName}>{activeAudio.name}</div>
      <div className={styles.controls}>
        <div className={styles.controlButton}>
          <button
            className={styles.skipBackButton}
            onClick={handlePrevious}
            disabled={loading}
          >
            <IoPlaySkipBack />
          </button>
        </div>
        <div className={styles.controlButton}>
          {loading ? (
            <IoSyncOutline size={25} className={styles.spinning} />
          ) : (
            <button className={styles.playButton} onClick={togglePlayPause}>
              {playing ? (
                <IoPause size={25} />
              ) : (
                <IoPlay size={25} className={styles.playIcon} />
              )}
            </button>
          )}
        </div>
        <div className={styles.controlButton}>
          <button
            className={styles.skipForwardButton}
            onClick={handleNext}
            disabled={loading}
          >
            <IoPlaySkipForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;

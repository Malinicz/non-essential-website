"use client";

import React from "react";
import dynamic from "next/dynamic";
import { IoRadio } from "react-icons/io5";
import styles from "./Player.module.scss";

const Player = dynamic(() => import("./Player"), {
  ssr: false,
  loading: () => (
    <div className={styles.playerFallback}>
      <IoRadio size={20} />
    </div>
  ),
});

export function LazyPlayer() {
  return <Player />;
}

"use client";

import React from "react";
import dynamic from "next/dynamic";
const Player = dynamic(() => import("./Player"), {
  ssr: false,
});

export function LazyPlayer() {
  return (
    <React.Suspense fallback={null}>
      <Player />
    </React.Suspense>
  );
}

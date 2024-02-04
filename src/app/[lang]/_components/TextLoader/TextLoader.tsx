import React from "react";
import styles from "./TextLoader.module.scss";

type PropsType = Readonly<{ text: string }>;

export function TextLoader({ text }: PropsType) {
  const [dots, setDots] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === "..." ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div>{text}</div>
      <div className={styles.dots}>{dots}</div>
    </div>
  );
}

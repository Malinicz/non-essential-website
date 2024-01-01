import * as React from "react";

type PropsType = Readonly<{
  ref: React.RefObject<HTMLElement>;
  value: string;
  offset?: number;
}>;

export function useAutoSizeTextArea({ ref, value, offset = 0 }: PropsType) {
  React.useEffect(() => {
    function adjustHeight() {
      if (!ref.current) {
        return;
      }

      ref.current.style.height = "auto";
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + offset + "px";
    }

    adjustHeight();

    window.addEventListener("resize", adjustHeight);

    return () => window.removeEventListener("resize", adjustHeight);
  }, [ref, value, offset]);
}

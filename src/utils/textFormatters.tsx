import React from "react";

type ComponentWithChildren = React.ComponentType<{ children: React.ReactNode }>;

export function wrapTextWithComponent(
  Component: ComponentWithChildren,
  text: string
): JSX.Element {
  const match = text.match(/\[html\](.*?)\[html\]/);

  if (!match || !match.index) return <>{text}</>;

  const before = text.slice(0, match.index);
  const after = text.slice(match.index + match[0].length);

  return (
    <>
      {before}
      <Component>{match[1]}</Component>
      {after}
    </>
  );
}

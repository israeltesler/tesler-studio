import type { ReactNode } from "react";

export function StudioWordmark({ className = "" }: { className?: string }): ReactNode {
  return (
    <span aria-label="tesler studio" className={`font-sans font-extralight lowercase tracking-[0.14em] ${className}`}>
      tesler studio
    </span>
  );
}

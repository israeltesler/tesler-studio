"use client";

import { useId, type ReactNode, type SVGProps } from "react";

export function OrbitStudioLogo(props: SVGProps<SVGSVGElement>): ReactNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="none" aria-hidden="true" {...props}>
      <circle cx="500" cy="375" r="184" stroke="white" strokeWidth="13" />
    </svg>
  );
}

"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { createHeroEngine } from "@/lib/cinematic-earth/engine.js";

export function CinematicEarthCanvasInner(): ReactNode {
  return <div className="cinematic-earth-canvas" aria-hidden="true" />;
}

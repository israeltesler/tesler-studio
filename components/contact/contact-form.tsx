"use client";

import { siteContent } from "@/lib/site-content";
import type { ReactNode } from "react";

export function ContactForm({ compact = false }: { compact?: boolean }): ReactNode {
  return <form className="w-full text-start">Contact form</form>;
}

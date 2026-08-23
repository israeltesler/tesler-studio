import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { Accent } from "@/components/ui/accent-text";
import { createMetadata } from "@/lib/metadata";
import { siteContent } from "@/lib/site-content";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "אודות",
  description: `${siteContent.brand} — סוכנות לעיצוב ופיתוח חוויות דיגיטל.`,
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>
      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}

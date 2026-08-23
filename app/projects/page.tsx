import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { Accent } from "@/components/ui/accent-text";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import { PROJECTS_PAGE_ENABLED } from "@/lib/projects-data";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "פרויקטים",
  description: "פרויקטים נבחרים — עיצוב, UX ופיתוח Web מדויק.",
  path: "/projects",
});

export default function ProjectsPage(): ReactNode {
  if (!PROJECTS_PAGE_ENABLED) {
    redirect("/");
  }

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Projects />
      <ContactCard />
    </main>
  );
}

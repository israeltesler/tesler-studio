import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { OrbitStudioLogo } from "@/components/brand/orbit-studio-logo";
import { Accent } from "@/components/ui/accent-text";
import { FadeIn } from "@/components/ui/motion-primitives";
import { siteContent } from "@/lib/site-content";
import { ShaderFlow } from "../shaders/shader-flow";

export function ContactCard(): ReactNode {
  return (
    <section className="mx-auto mt-16 mb-12 w-full max-w-275 px-6 sm:mt-24 sm:mb-20 sm:px-10 lg:mt-32">
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-[1.6rem]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25">
              <ShaderFlow scale={3} brightness={3}/>
            </div>
            <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="flex flex-col gap-5">
                <h2 className="font-display text-[2.25rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem]">
                  <Accent>לפרויקט הבא</Accent>
                </h2>
                <ContactCardCtas />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

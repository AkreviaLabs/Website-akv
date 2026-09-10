import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { EngineeringStatement } from "@/components/sections/engineering-statement";
import { WhatWeBuild } from "@/components/sections/what-we-build";
import { OfflineFirst } from "@/components/sections/offline-first";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Team } from "@/components/sections/team";
import { Technology } from "@/components/sections/technology";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EngineeringStatement />
        <WhatWeBuild />
        <OfflineFirst />
        <HowWeWork />
        <Team />
        <Technology />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

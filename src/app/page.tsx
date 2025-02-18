"use client"
import HeroComponent from "@/components/landing-sections/hero";
import InscriptionSection from "@/components/landing-sections/inscription";
import { RulesSection } from "../components/landing-sections/rules";
import { Judges } from "../components/landing-sections/judges";
import { Footer } from "../components/landing-sections/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full">
        <HeroComponent />

        <section className="flex flex-col">
          <section id="inscription">
            <InscriptionSection />
          </section>

          <Judges />

          <section id="rules">
            <RulesSection />
          </section>

        </section>

        <Footer />
      </main>
    </>
  );
}

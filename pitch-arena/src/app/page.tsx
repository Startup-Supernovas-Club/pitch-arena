"use client"
import HeroComponent from "@/components/landing-sections/hero";
import InscriptionSection from "@/components/landing-sections/inscription";
import { RulesSection } from '../components/landing-sections/rules';
import { Judges } from '../components/landing-sections/judges';
import { Footer } from '../components/landing-sections/footer';

export default function Home() {
  return (
    <>
      <main className="flexf items-center justify-center w-full h-[100vh]">
        <HeroComponent />

        <section className="flex flex-col">
          <InscriptionSection />
          <Judges />
          <RulesSection />
          <Footer />
        </section>
      </main>
    </>
  );
}

"use client"
import HeroComponent from "@/components/landing-sections/hero";
import InscriptionSection from "@/components/landing-sections/inscription";

export default function Home() {
  return (
    <>
      <main className="flexf items-center justify-center w-full h-[100vh]">
        <HeroComponent />

        <section className="flex flex-col">
          <InscriptionSection />
        </section>
      </main>
    </>
  );
}

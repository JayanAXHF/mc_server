"use client";
import ApplicationModal from "@/components/ApplicationModal";
import { FeaturesSection } from "@/components/Featured";
import Footer from "@/components/Footer";
import { Media } from "@/components/Media";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";
import { MillionLintProvider } from "@million/lint/runtime";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [discord, setDiscord] = useState("");
  return (
    <MillionLintProvider>
      <div
        className="h-screen w-full rounded-md antialiased bg-grid-white/[0.02] overflow-hidden bg-neutral-950 relative flex flex-col items-center justify-center
      "
      >
        <Spotlight
          className="-top-20 left-0 md:left-60 md:-top-32"
          fill="white"
        />

        <div className="max-w-2xl mx-auto p-4 z-10">
          <h1 className="relative z-10 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 text-5xl  text-center font-sans font-bold">
            Amalgamation SMP
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            The server, founded by two players wanting to have fun, has evolved
            into a 15-player SMP currently in its second season
          </p>
          <span className="flex flex-row items-center justify-center gap-x-4 h-12">
            <input
              type="text"
              placeholder="Enter your discord tag"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 h-12  bg-neutral-950 placeholder:text-neutral-700"
            />
            <span className="relative cursor-pointer h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-1/4">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

              <ApplicationModal discord={discord} setDiscord={setDiscord} />
            </span>
          </span>
        </div>
      </div>
      <FeaturesSection />
      <Media />
      <Footer />
    </MillionLintProvider>
  );
}

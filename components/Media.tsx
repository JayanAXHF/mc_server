"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { SparklesCore } from "./ui/sparkles";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import { PinContainer } from "./ui/3d-pin";

export function Media() {
  return (
    <div className="h-[40rem] flex flex-col lg:flex-col overflow-hidden  justify-center bg-neutral-950 w-full gap-4 mx-auto px-8 relative items-start">
      <h1 className="text-4xl text-center w-full font-extrabold tracking-tight lg:text-5xl z-10">
        Our social presence
      </h1>

      <div className="w-1/2 mx-auto flex flex-row justify-around mt-10 z-10">
        <PinContainer
          title="Join the Server"
          href="https://discord.gg/BKUfDxCwpe"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Lala ki chaukhat
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                The official discord server for Amalgamation SMP
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        <PinContainer
          title="Join the Group"
          href="https://chat.whatsapp.com/FLoKmYvM0SL3SJdsm5fpHu"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Amalgamation SMP
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                The official WhatsApp Group for Amalgamation SMP
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-green-600 via-lime-500 to-emerald-600" />
          </div>
        </PinContainer>
      </div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}

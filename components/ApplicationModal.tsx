"use client";

import React, { useState } from "react";
import { Modal, ModalBody, ModalTrigger } from "./ui/animated-modal";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { db } from "@/firebase";
import { ref, set } from "firebase/database";
import { customAlphabet, nanoid } from "nanoid";

import { sendDiscordMessage } from "@/app/_actions/discord";
import { MillionLintProvider } from "@million/lint/runtime";

const ApplicationModal = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  interface FormData {
    fName: string;
    sName: string;
    ign: string;
    discord: string;
  }

  const [formData, setFormData] = useState({
    fName: "",
    sName: "",
    ign: "",
    discord: "",
  });

  const handleOnSubmit = async () => {
    const userId = customAlphabet("1234567890", 10)();
    ("");
    await set(ref(db, "users/" + userId), { ...formData, uuid: userId });
    await sendDiscordMessage(`> **\`Player ${formData.ign} has applied for whitelist\`**
First name:** ${formData.fName}**
Last Name: **${formData.sName}**
IGN: **${formData.ign}**
Discord Gamertag:**${formData.discord}**
@everyone
`);
  };

  return (
    <MillionLintProvider>
      <Modal>
        <ModalTrigger className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Next
        </ModalTrigger>
        <ModalBody className="py-20  flex items-center justify-center">
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Apply to get whitelisted on{" "}
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              Amalgamation SMP
            </span>{" "}
            now!
          </h4>
          <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input
                    id="firstname"
                    placeholder="Tyler"
                    type="text"
                    value={formData.fName}
                    onChange={(e) =>
                      setFormData({ ...formData, fName: e.target.value })
                    }
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input
                    id="lastname"
                    placeholder="Durden"
                    type="text"
                    value={formData.sName}
                    onChange={(e) =>
                      setFormData({ ...formData, sName: e.target.value })
                    }
                  />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="text">Discord Gamertag</Label>
                <Input
                  id="text"
                  type="text"
                  value={formData.discord}
                  onChange={(e) =>
                    setFormData({ ...formData, discord: e.target.value })
                  }
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="ign">In-Game Name</Label>
                <Input
                  id="ign"
                  type="text"
                  value={formData.ign}
                  onChange={(e) =>
                    setFormData({ ...formData, ign: e.target.value })
                  }
                />
              </LabelInputContainer>
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
                onClick={handleOnSubmit}
              >
                Apply &rarr;
                <BottomGradient />
              </button>
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
          </div>
        </ModalBody>
      </Modal>
    </MillionLintProvider>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default ApplicationModal;

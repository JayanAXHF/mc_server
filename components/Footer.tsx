import { MillionLintProvider } from "@million/lint/runtime";
import React from "react";

const Footer = () => {
  return (
    <MillionLintProvider>
      <footer className="w-full min-h-[20rem] bg-black flex flex-col py-10 gap-y-10">
        <div className="w-full h-full flex flex-col px-10 lg:flex-row lg:px-48 items-center  gap-x-10 justify-between">
          {" "}
          <span>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Amalgamation SMP
            </h2>
            <ul className="my-6  list-none [&>li]:mt-2 list-inside">
              <li>
                Server Owner:{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  FRXGFA
                </code>
                , Jayan Sunil
              </li>
              <li>
                Server Admin:{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  Veer
                </code>
                , Yajuveer Nayar
              </li>
              <li>
                Server Admin:{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  Vishwank
                </code>
                , Vishwank Chinnam
              </li>
            </ul>
          </span>
          <span>
            <p className="lg:text-xl text-lg  text-muted-foreground max-w-lg">
              When you apply, you will be interviewed by one of the admins or
              the owner
            </p>
            Rules:{" "}
            <a
              href="/Rules_for_Amalgamation_S2.pdf"
              target="_blank"
              className="text-blue-500"
            >
              Rules and Code of Conduct
            </a>
          </span>
        </div>
        <small className="text-sm font-medium leading-none pb-2 text-center">
          &copy; Jayan Sunil 2024. All rights reserved.
        </small>
      </footer>
    </MillionLintProvider>
  );
};

export default Footer;

"use client";

import {
  Bell,
  CheckCheck,
  ChevronsRightLeft,
  CircleX,
  TriangleAlert,
  Braces,
} from "lucide-react";
import { Nextjs } from "./icons/nextjs";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="h-[22px] w-full bg-[var(--primary)] text-black flex items-center justify-between text-xs leading-none">
      <div className="h-full flex items-center justify-center">
        <button className="h-full px-2.5 bg-[var(--secondary)]">
          <ChevronsRightLeft className="size-[14px]" />
        </button>
        <div className="h-full flex items-center justify-center gap-1 mx-2">
          <button className="flex items-center justify-center gap-0.5">
            <CircleX className="size-[14px]" />
            <span>0</span>
          </button>
          <button className="flex items-center justify-center gap-0.5">
            <TriangleAlert className="size-[14px]" />
            <span>0</span>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="https://nextjs.org/" target="_blank" className="flex items-center justify-center gap-1 mr-3">
          <Nextjs />
          <span>Powered by Next.js</span>
        </Link>
        <button className="hidden md:flex items-center justify-center gap-1 mr-3">
          <Braces className="size-[14px]" />
          <span>Typescript JSX</span>
        </button>
        <button className="hidden md:flex items-center justify-center gap-1 mr-3">
          <CheckCheck className="size-[14px]" />
          <span>Prettier</span>
        </button>
        <button className="mr-3">
          <Bell className="size-[14px]" />
        </button>
      </div>
    </footer>
  );
};

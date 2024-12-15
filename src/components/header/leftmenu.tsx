"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Tooltip } from "@nextui-org/react";

// Icons
import { Files } from "./icons/files";
import { Code, MessageCircle, Github, CircleUserRound, Settings } from "lucide-react";

const LinkMenuIcon = [
  {
    href: "/",
    icon: Files,
    label: "Esplora risorse",
  },
  {
    href: "/github",
    icon: Github,
    label: "Github",
  },
  {
    href: "/projects",
    icon: Code,
    label: "Progetti",
  },
  {
    href: "/contact",
    icon: MessageCircle,
    label: "Contatti",
  },
];

const classLink =
  "size-[48px] flex items-center justify-center text-[var(--primary)] opacity-40 hover:opacity-100 transition-all duration-300 border-l-2 border-l-transparent";

export const LeftMenu = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row h-[calc(100vh-35px-22px)]">
      <div className="bg-[var(--background)] w-full max-w-[48px] border border-[var(--border)] border-l-0">
        <div className="w-full h-full flex flex-col items-center justify-between">
          <ul>
            {LinkMenuIcon.map((item, index) => (
              <li key={index}>
                <Tooltip
                  content={item.label}
                  placement="right"
                  showArrow={true}
                  color="primary"
                  className="text-black !rounded-lg !px-2 !shadow-none !cursor-default"
                  delay={0}
                  closeDelay={0}
                >
                  <Link
                    href={item.href}
                    className={`${classLink} ${
                      pathname === item.href
                        ? "!opacity-100 !border-l-[var(--primary)]"
                        : ""
                    }`}
                  >
                    <item.icon className="size-[24px]" />
                  </Link>
                </Tooltip>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <Tooltip
                content="Chi sono"
                placement="right"
                showArrow={true}
                color="primary"
                className="text-black !rounded-lg !px-2 !shadow-none !cursor-default"
                delay={0}
                closeDelay={0}
              >
                <Link
                  href="/about"
                  className={`${classLink} ${
                    pathname === "/about"
                      ? "!opacity-100 !border-l-[var(--primary)]"
                      : ""
                  }`}
                >
                  <CircleUserRound className="size-[24px]" />
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip
                content="Impostazioni"
                placement="right"
                showArrow={true}
                color="primary"
                className="text-black !rounded-lg !px-2 !shadow-none !cursor-default"
                delay={0}
                closeDelay={0}
              >
                <Link
                  href="/settings"
                  className={`${classLink} ${
                    pathname === "/settings"
                      ? "!opacity-100 !border-l-[var(--primary)]"
                      : ""
                  }`}
                >
                  <Settings className="size-[24px]" />
                </Link>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[var(--background)] border border-[var(--border)] lg:w-[200px] hidden lg:block"></div>
      <div className=" w-[90%] lg:w-full">{children}</div>
    </div>
  );
};

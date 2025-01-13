// Icons
import { Files } from "./header/icons/files";
import { Code, MessageCircle, Github, CircleUserRound, Settings, Braces } from "lucide-react";
import { FaHtml5, FaReact, FaCss3 } from "react-icons/fa6";
import { MdInfo } from "react-icons/md";

export const LinkMenuIcon = [
  {
    href: "/",
    icon: Files,
    label: "Esplora risorse",
    filename: "index.html",
    iconFile: <FaHtml5 className="text-[#e65100]" />,
  },
  {
    href: "/projects",
    icon: Code,
    label: "Progetti",
    filename: "projects.json",
    iconFile: <Braces className="text-[#f9a825] size-[16px]" />,
  },
  {
    href: "/github",
    icon: Github,
    label: "Github",
    filename: "github.md",
    iconFile: <MdInfo className="text-[#42a5f5]" />,
  },
  {
    href: "/contact",
    icon: MessageCircle,
    label: "Contatti",
    filename: "contact.css",
    iconFile: <FaCss3 className="text-[#42a5f5]" />,
  },
  {
    href: "/about",
    icon: CircleUserRound,
    label: "Chi sono",
    filename: "about.jsx",
    iconFile: <FaReact className="text-[#0674b2]" />,
  },
  {
    href: "/settings",
    icon: Settings,
    label: "Impostazioni",
  },
];
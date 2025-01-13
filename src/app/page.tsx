"use client";

import { LeftMenu } from "@/components/header/leftmenu";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Front End Developer";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <LeftMenu>
        <div className="w-full h-full relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0">
            <div className="flex flex-col gap-6 mb-10 max-w-2xl">
              <div className="flex flex-col gap-1">
                <span className="text-white text-sm sm:text-base">Ciao, sono</span>
                <h1 className="text-[var(--primary)] font-bold text-4xl sm:text-6xl">Andrea De Laurentis</h1>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white text-sm sm:text-base">Sono un</span>
                <span className="text-[var(--secondary)] text-xl sm:text-3xl cursor">{text}</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-sm sm:text-base">
                  Sono uno studente dell&apos;istituto <a href="https://www.infobasic.it/" target="_blank" className="text-[var(--primary)]">Infobasic</a> con l&apos;obiettivo di diventare un front-end developer.
                </p>
                <p className="text-white text-sm sm:text-base">
                  Aspiro a entrare nel mondo della programmazione e crescere confrontandomi con professionisti del settore.
                </p>
                <p className="text-white text-sm sm:text-base">
                  Mi considero una persona collaborativa e sempre disponibile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LeftMenu>
      <Footer />
    </>
  );
}

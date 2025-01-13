import { LeftMenu } from "@/components/header/leftmenu";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <LeftMenu>
        <div className="w-full h-full relative">
          <div className="flex flex-col gap-2 max-w-[300px] max-h-[300px]">
            <div className="w-full h-full">
              <Image src="/img/profile__about.jpg" alt="About" width={300} height={300} className="object-cover" />
            </div>
            <p className="text-white text-center">&#34;Yep, That&#39;s Me&#34;...</p>
          </div>
          <p className="text-white">Sono uno studente dell&apos;istituto &quot;Infobasic&quot; con l&apos;obiettivo di diventare un front-end developer. Da quando avevo 18 anni, lavoro per raggiungere l&apos;indipendenza economica. Durante i miei studi, ho seguito corsi che mi hanno migliorato nel lavoro di squadra e nella gestione delle risorse. Aspiro a entrare nel mondo della programmazione e crescere confrontandomi con professionisti del settore. Mi considero una persona collaborativa e sempre disponibile.</p>
        </div>
      </LeftMenu>
      <Footer />
    </>
  );
}

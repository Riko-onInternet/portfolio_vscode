import { LeftMenu } from "@/components/header/leftmenu";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export default function About() {
  return (
    <>
      <Header />
      <LeftMenu>
        <div className="w-full h-full relative">
          <p className="text-white">Sono uno studente dell&apos;istituto &quot;Infobasic&quot; con l&apos;obiettivo di diventare un front-end developer. Da quando avevo 18 anni, lavoro per raggiungere l&apos;indipendenza economica. Durante i miei studi, ho seguito corsi che mi hanno migliorato nel lavoro di squadra e nella gestione delle risorse. Aspiro a entrare nel mondo della programmazione e crescere confrontandomi con professionisti del settore. Mi considero una persona collaborativa e sempre disponibile.</p>
        </div>
      </LeftMenu>
      <Footer />
    </>
  );
}

import { LeftMenu } from "@/components/header/leftmenu";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
export default function Home() {
  return (
    <>
      <Header />
      <LeftMenu>
        <p>Andrea De Laurentis</p>
      </LeftMenu>
      <Footer />
    </>
  );
}

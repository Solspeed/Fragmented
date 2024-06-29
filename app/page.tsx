import Image from "next/image";
// import Navbar from './components/Main`'
import Main from "./components/Main";
import Description from "./components/Description";
import Working from "./components/page";
import UseCase from "./components/UseCase";
import Solanafooter from "./components/solanafooter";
import Footer from "./components/footer";
export default function Home() {
  return (
    <main className=" bg-[#08070B] flex flex-col ">
      <Main />
      <Description />
      <Working />
      <UseCase />
      <Solanafooter />
      <Footer />
    </main>
  );
}

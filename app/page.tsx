import Image from "next/image";
import Navbar from './components/Navbar/page';
import Main from './components/Main/page';
import Description from "./components/Description/page"

export default function Home() {
  return (
    <main className=" bg-[#08070B] flex flex-col">
   {/* <Navbar /> */}
   <Main />
    <Description />
    </main>
  );
}

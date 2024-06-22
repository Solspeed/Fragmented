import Image from "next/image";
import Navbar from './components/Navbar/page';
import Main from './components/Main/page';

export default function Home() {
  return (
    <main className=" bg-[#08070B]">
   <Navbar />
   <Main />
    </main>
  );
}

import Image from "next/image";
// import Navbar from './components/Main`'
import Main from "./components/Main";
import Description from "./components/Description";
import Working from "./components/page";
import UseCase from "./components/UseCase";

export default function Home() {
  return (
    <main className=" bg-[#08070B] flex flex-col ">
      {/* <Navbar /> */}
        <Main />  
        <Description />
      <Working />
      <UseCase />
    </main>
  );
}

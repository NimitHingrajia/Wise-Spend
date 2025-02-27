import About from "@/components/About";
import Image from "next/image";
import Services from "@/components/Services";
import Signin from "@/components/Signin";
import SignUp from "@/components/Signup";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Image
        src="/WiseSpend_logo.svg"
        alt="Wise-Spend logo"
        width={500}
        height={500}
      />
      <About />
      <Services />
      <Signin />
      <SignUp />
    </div>
  );
}

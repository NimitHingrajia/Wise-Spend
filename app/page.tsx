import About from "@/components/About";
import Image from "next/image";
import Services from "@/components/Services";

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
    </div>
  );
}

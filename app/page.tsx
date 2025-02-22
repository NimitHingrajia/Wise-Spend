import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/WiseSpend_logo.svg"
        alt="Wise-Spend logo"
        width={500}
        height={500}
      />

<h1>Wise-Spend</h1>
<p>Boost your credit, build your future</p>
    </div>
  );
}

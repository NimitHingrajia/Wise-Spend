"use client";
import "./globals.css";
import { useRouter } from "next/navigation";
import { Nunito, Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700", "900"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${poppins.variable} ${nunito.variable}`}
    >
      <body className="overflow-x-hidden">
        {/* Header */}
        <div className="fixed z-30 h-auto w-full bg-[#273444] text-white">
          <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-8 lg:px-[50px] xl:px-[100px]">
            <Image
              src="/WiseSpend_logo.svg"
              alt="Wise Spend"
              width={100}
              height={100}
              className="cursor-pointer tracking-wide"
              onClick={() => router.push("/")}
            />
            <div className="flex gap-4 justify-end">
              <a
                href="#about"
                className="font-nunito text-sm hover:text-[#A0E7E5] transition duration-300"
              >
                ABOUT
              </a>
              <a
                href="#services"
                className="font-nunito text-sm hover:text-[#A0E7E5] transition duration-300"
              >
                SERVICES
              </a>
            </div>
            <div>
              <button className="font-nunito text-sm bg-[#A0E7E5] text-[#273444] px-4 py-2 square-md ml-4 md:ml-8 lg:ml-16">
                SIGN UP
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center justify-center h-auto w-full bg-[#273444] px-4 py-6 md:px-8 lg:px-[100px] xl:px-[150px] text-white">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:text-left">
            <p className="font-nunito text-lg font-semibold">Wise Spend</p>
            <p className="font-nunito text-sm">
              Boost your credit, build your future
            </p>
            <p className="font-nunito font-semibold">Try our Services</p>
            <p>Get free advices to build your credit</p>
            <button className="font-nunito text-sm bg-[#A0E7E5] text-[#273444] px-4 py-2 square-md">
              WiseSpend
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

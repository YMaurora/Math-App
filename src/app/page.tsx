import Image from "next/image";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar
        title="Mate App"
        LogoUrl="https://cdn-icons-png.flaticon.com/512/7407/7407078.png"
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          content data
        </div>
      </main>
    </>
  );
}

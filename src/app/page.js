import { Hero } from "@/components/ui/organisms/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen max-w-full font-[family-name:var(--font-barlow)] bg-gradient-to-b from-black via-secondary to-primary">
      <main>
        <Hero/>
      </main>
      <footer>
      </footer>
    </div>
  );
}

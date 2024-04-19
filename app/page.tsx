import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col gap-5 w-full">
      <section className="absolute top-0 w-full h-screen bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden" style={{ backgroundImage: "url('/wallpaper/folowing-growiht.png')" }}>
        <div className="flex flex-col py-40 h-full items-center justify-center bg-black bg-opacity-10" style={{ backdropFilter: " blur(2px)" }}>
          <div className="container px-4 mx-auto">
            <div className="flex flex-col gap-3 text-center max-w-3xl mx-auto">
              <h3 className="mb-11 text-4xl sm:text-6xl md:text-7xl font-bold text-center tracking-px-n leading-none text-white/80 md:text-white/60 text-wrap md:animate-pulse md:animate-infinite">
                Its not just a place, it&apos;s an experience like no other.
              </h3>

              <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                <div className="bg-card h-32 rounded-lg col-span-1 animate-bounce">

                </div>

                <div className="bg-card h-32 rounded-lg col-span-1 animate-bounce">

                </div>

                <div className="bg-card h-32 rounded-lg col-span-2 md:col-span-1 animate-bounce">

                </div>
              </div>

              <div className="md:inline-block mt-10">
                <Button variant="ghost" size="icon" className="rounded-full size-12 animate-bounce hover:bg-violet-300">
                  <ArrowDown className="stroke-violet-500"/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col">

      </section>

    </section>
  );
}

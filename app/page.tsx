import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <section className="absolute top-0 w-full h-screen bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden" style={{ backgroundImage: "url('/wallpaper/folowing-growiht.png')" }}>
        <div className="flex flex-col py-40 h-full items-center justify-center bg-black bg-opacity-10" style={{ backdropFilter: " blur(2px)" }}>
          <div className="container px-4 mx-auto">
            <div className="flex flex-col gap-3 text-center max-w-3xl mx-auto">
              <h3 className="mb-11 text-4xl sm:text-6xl md:text-7xl font-bold text-center tracking-px-n leading-none text-white/80 md:text-white/60 text-wrap md:animate-pulse md:animate-infinite">
                Its not just a place, it&apos;s an experience like no other.
              </h3>

              <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-3 w-full">
                <div className="bg-card h-32 rounded-lg col-span-1">

                </div>

                <div className="bg-card h-32 rounded-lg col-span-1 animate-bounce">

                </div>

                <div className="bg-card h-32 rounded-lg col-span-2 md:col-span-1">

                </div>
              </div>

              <div className="md:inline-block mt-10">
                <Button variant="ghost" size="icon" className="rounded-full size-12 animate-bounce hover:bg-violet-300">
                  <ArrowDown className="stroke-violet-500" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5 w-full">
        <div className="flex flex-col w-full">
          <div className="container px-4 mx-auto">
            <div className="max-w-lg lg:max-w-7xl mx-auto">
              <div className="flex flex-wrap -mx-4 mb-18 items-center">
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                  <div className="max-w-md">
                    <h1 className="font-heading text-4xl xs:text-6xl font-bold text-gray-50">
                      <span>Customer is Our</span>
                      <span className="font-serif italic">Priority</span>
                    </h1>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-lg lg:ml-auto">
                    <p className="text-gray-300">Risus viverra justo sagittis vestibulum metus. Massa lacinia eros posuere cursus sed vestibulum massa gravida. Turpis volutpat faucibus hac sed suspendisse convallis vestibulum massa.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 mb-16 lg:mb-12 items-center">
                <div className="relative w-full lg:w-1/2 pb-16 lg:pb-0 px-4 mb-12 lg:mb-0">
                  <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-60 bg-gray-500"></div>
                  <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-52 bg-gray-500"></div>
                  <div className="max-w-sm">
                    <img className="block mb-6" src="https://shuffle.dev/saturn-assets/images/testimonials/quote-white.svg" alt="" />
                    <h5 className="text-xl font-semibold text-white mb-10">Really recommend for agency</h5>
                    <p className="text-lg text-gray-300 mb-6">“They are able to help a startup like mine scale and are very responsive to all our unique needs”</p>
                    <div className="flex items-center">
                      <img className="block w-12 h-12 rounded-full" src="https://shuffle.dev/saturn-assets/images/testimonials/avatar-reviews2.png" alt="" />
                      <div className="ml-4">
                        <span className="block font-semibold text-white leading-none mb-1">Jhonatan Albert</span>
                        <span className="block text-sm text-gray-400">Founder of Saturn</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-sm lg:mx-auto">
                    <img className="block mb-6" src="https://shuffle.dev/saturn-assets/images/testimonials/quote-white.svg" alt="" />
                    <h5 className="text-xl font-semibold text-white mb-10">Amazing Experience</h5>
                    <p className="text-lg text-gray-300 mb-6">“They are able to help a startup like mine scale and are very responsive to all our unique needs”</p>
                    <div className="flex items-center">
                      <img className="block w-12 h-12 rounded-full" src="https://shuffle.dev/saturn-assets/images/testimonials/avatar-reviews1.png" alt="" />
                      <div className="ml-4">
                        <span className="block font-semibold text-white leading-none mb-1">Jovanca Azalea</span>
                        <span className="block text-sm text-gray-400">CTO of Coca Soft</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="inline-block mr-1 w-7 h-1 bg-orange-900"></button>
                <button className="inline-block mr-1 w-7 h-1 bg-gray-400 hover:bg-gray-200"></button>
                <button className="inline-block w-7 h-1 bg-gray-400 hover:bg-gray-200"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

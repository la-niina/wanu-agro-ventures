"use client"

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    const contentElement = contentRef.current;
    if (contentElement) {
      const targetOffset = contentElement.offsetTop;
      smoothScroll(targetOffset);
    }
  };

  const smoothScroll = (targetOffset: number) => {
    const duration = 1000; // Duration of the scroll animation in milliseconds
    const startTime = performance.now();
    const startOffset = window.pageYOffset;
    const distance = targetOffset - startOffset;

    const scrollStep = (timestamp: number) => {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is between 0 and 1
      const easedProgress = easeInOutQuad(progress); // Apply easing function
      window.scrollTo(0, startOffset + distance * easedProgress);

      if (elapsedTime < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  // Easing function for smoother animation
  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  return (
    <main className="flex flex-col w-full overflow-auto">
      <section className="absolute top-0 w-full bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden" style={{ backgroundImage: "url('/wallpaper/folowing-growiht.png')" }}>
        <div className="flex flex-col h-fit bg-black bg-opacity-10" style={{ backdropFilter: " blur(2px)" }}>
          <div className="container flex flex-col px-4 mx-auto h-screen items-center justify-center">
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
                <Button onClick={() => handleClick()} variant="ghost" size="icon" className="rounded-full size-12 animate-bounce hover:bg-violet-300">
                  <ArrowDown className="stroke-violet-500" />
                </Button>
              </div>
            </div>
          </div>

          <div id="content" ref={contentRef} className="flex flex-col gap-5 w-full bg-black bg-opacity-90 text-white">
            <div className="container mx-auto px-4 py-20">
              <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
                <div className="flex items-center">
                  <div className="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 text-sm font-bold">1</div>
                  <span className="font-bold text-white">Shopping Cart</span>
                </div>
                <span className="my-4 md:my-0 md:mx-8 lg:mx-16">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M10.6667 1.16669L16.5 7.00002M16.5 7.00002L10.6667 12.8334M16.5 7.00002L1.5 7.00002" stroke="#84878A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <div className="flex items-center">
                  <div className="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-blueGray-800 text-sm font-bold text-white">2</div>
                  <span className="font-bold text-white">Payment & Delivery Options</span>
                </div>
                <span className="my-4 md:my-0 md:mx-8 lg:mx-16">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M10.6667 1.16669L16.5 7.00002M16.5 7.00002L10.6667 12.8334M16.5 7.00002L1.5 7.00002" stroke="#84878A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
                <div className="flex items-center">
                  <div className="inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-blueGray-800 text-sm font-bold text-white">3</div>
                  <span className="font-bold text-white">Order Received</span>
                </div>
              </div>
            </div>

            <div className="container px-4 mx-auto">
              <div className="max-w-lg lg:max-w-7xl mx-auto">
                <div className="flex flex-wrap -mx-4 mb-18 items-center">
                  <div className="w-full bg-transparent lg:w-1/2 px-4 mb-8 lg:mb-0">
                    <div className="max-w-md">
                      <h1 className="font-heading text-4xl xs:text-6xl font-bold">
                        <span>Customer is Our</span>
                        <span className="font-serif italic">Priority</span>
                      </h1>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 px-4">
                    <div className="max-w-lg lg:ml-auto">
                      <p className="">Risus viverra justo sagittis vestibulum metus. Massa lacinia eros posuere cursus sed vestibulum massa gravida. Turpis volutpat faucibus hac sed suspendisse convallis vestibulum massa.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-4 mb-16 lg:mb-12 items-center">
                  <div className="relative w-full lg:w-1/2 pb-16 lg:pb-0 px-4 mb-12 lg:mb-0">
                    <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 w-px h-60 bg-gray-500"></div>
                    <div className="lg:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px w-52 bg-gray-500"></div>
                    <div className="max-w-sm">
                      <img className="block mb-6" src="https://shuffle.dev/saturn-assets/images/testimonials/quote-white.svg" alt="" />
                      <h5 className="text-xl font-semibold mb-10">Really recommend for agency</h5>
                      <p className="text-lg  mb-6">“They are able to help a startup like mine scale and are very responsive to all our unique needs”</p>
                      <div className="flex items-center">
                        <img className="block w-12 h-12 rounded-full" src="https://shuffle.dev/saturn-assets/images/testimonials/avatar-reviews2.png" alt="" />
                        <div className="ml-4">
                          <span className="block font-semibold leading-none mb-1">Jhonatan Albert</span>
                          <span className="block text-sm ">Founder of Saturn</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-4">
                    <div className="max-w-sm lg:mx-auto">
                      <img className="block mb-6" src="https://shuffle.dev/saturn-assets/images/testimonials/quote-white.svg" alt="" />
                      <h5 className="text-xl font-semibold mb-10">Amazing Experience</h5>
                      <p className="text-lg  mb-6">“They are able to help a startup like mine scale and are very responsive to all our unique needs”</p>
                      <div className="flex items-center">
                        <img className="block w-12 h-12 rounded-full" src="https://shuffle.dev/saturn-assets/images/testimonials/avatar-reviews1.png" alt="" />
                        <div className="ml-4">
                          <span className="block font-semibold leading-none mb-1">Jovanca Azalea</span>
                          <span className="block text-sm ">CTO of Coca Soft</span>
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

            <div className="relative container mx-auto px-4">
              <img className="hidden md:block absolute top-0 right-0 animate-spinStar z-10" src="https://static.shuffle.dev/components/preview/ef7897b6-1cd6-4a34-b77d-214943c1b450/casper-assets/services/blink-star.png" alt="" />
              <div className="absolute top-0 right-0 -mr-52 -mt-64 w-186 h-186 bg-gradient-to-t from-purple-600 via-darkBlue-900 rounded-full filter blur-4xl"></div>
              <div className="relative max-w-lg lg:max-w-4xl mx-auto lg:mx-0 mb-32">
                <h2 className="font-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6">Our Services</h2>
                <p className="max-w-xl text-xl text-gray-500 tracking-tight">Casper is powered by state-of-the-art artificial intelligence and ensuring natural and meaningful interactions</p>
              </div>

              <div className="relative">
                <a className="group block cursor-pointer mb-14 pb-8 border-b-2 border-white border-opacity-10 hover:border-opacity-100 items-center transition duration-300" href="#">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
                      <div className="flex items-start">
                        <span className="hidden group-hover:inline-block mr-5 font-heading text-4xl font-medium text-sky-900">01</span>
                        <h4 className="font-heading text-4xl font-medium text-white group-hover:text-sky-900">
                          <span className="block">Personalized</span>
                          <span>Experiences</span>
                        </h4>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
                      <div className="relative flex items-center">
                        <img className="hidden md:block lg:hidden xl:block absolute top-0 left-0 xl:-mt-14 ml-8 w-32 opacity-0 group-hover:opacity-100 transition duration-300" src="https://static.shuffle.dev/components/preview/ef7897b6-1cd6-4a34-b77d-214943c1b450/casper-assets/services/axe.png" alt="" />
                        <p className="max-w-md ml-auto text-right text-white tracking-tight leading-snug">By understanding your visitors' needs, our chat assistant creates a unique experience that keeps them coming back for more unique process.</p>
                      </div>
                    </div>
                    <div className="w-full lg:w-2/12 px-4 text-right">
                      <span className="inline-block text-white group-hover:text-sky-900 transform rotate-0 group-hover:rotate-90 transition duration-300">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5 42.5L42.5 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M17.5 17.5H42.5V42.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
                <a className="group block cursor-pointer mb-14 pb-8 border-b-2 border-white border-opacity-10 hover:border-opacity-100 items-center transition duration-300" href="#">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
                      <div className="flex items-start">
                        <span className="hidden group-hover:inline-block mr-5 font-heading text-4xl font-medium text-sky-900">02</span>
                        <h4 className="font-heading text-4xl font-medium text-white group-hover:text-sky-900">
                          <span className="block">Analytics and</span>
                          <span>Insights</span>
                        </h4>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
                      <div className="relative flex items-center">
                        <img className="hidden xl:block absolute top-0 left-0 -mt-14 ml-8 w-32 opacity-0 group-hover:opacity-100 transition duration-300" src="https://static.shuffle.dev/components/preview/ef7897b6-1cd6-4a34-b77d-214943c1b450/casper-assets/services/box-items.png" alt="" />
                        <p className="max-w-md ml-auto text-right text-white tracking-tight leading-snug">Our chat assistant is available round the clock, providing instant responses and support, even when your team is offline. Say goodbye to missed inquiries</p>
                      </div>
                    </div>
                    <div className="w-full lg:w-2/12 px-4 text-right">
                      <span className="inline-block text-white group-hover:text-sky-900 transform rotate-0 group-hover:rotate-90 transition duration-300">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5 42.5L42.5 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M17.5 17.5H42.5V42.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
                <a className="group block cursor-pointer mb-14 pb-8 border-b-2 border-white border-opacity-10 hover:border-opacity-100 items-center transition duration-300" href="#">
                  <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
                      <div className="flex items-start">
                        <span className="hidden group-hover:inline-block mr-5 font-heading text-4xl font-medium text-sky-900">03</span>
                        <h4 className="font-heading text-4xl font-medium text-white group-hover:text-sky-900">
                          <span className="block">Seamless</span>
                          <span>Integration</span>
                        </h4>
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
                      <div className="relative flex items-center">
                        <img className="hidden xl:block absolute top-0 left-0 -mt-14 ml-8 w-32 opacity-0 group-hover:opacity-100 transition duration-300" src="https://static.shuffle.dev/components/preview/ef7897b6-1cd6-4a34-b77d-214943c1b450/casper-assets/services/bubble-robot.png" alt="" />
                        <p className="max-w-md ml-auto text-right text-white tracking-tight leading-snug">Our chat assistant is available round the clock, providing instant responses and support, even when your team is offline. Say goodbye to missed inquiries</p>
                      </div>
                    </div>
                    <div className="w-full lg:w-2/12 px-4 text-right">
                      <span className="inline-block text-white group-hover:text-sky-900 transform rotate-0 group-hover:rotate-90 transition duration-300">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5 42.5L42.5 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M17.5 17.5H42.5V42.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

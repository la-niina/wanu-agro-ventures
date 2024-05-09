import { Button } from "@/components/ui/button";

export default function Blog() {
    return (
        <section
            style={{ backgroundImage: "url('/wallpaper/folowing-growiht.png')" }}>
            <div className="py-20 radius-for-skewed">
                <div className="container mx-auto px-4 text-white">
                    <div className="mb-16 text-center">
                        <span className="text-green-600 font-bold">Dolor sit amet consectutar</span>
                        <h2 className="text-4xl lg:text-5xl font-bold font-heading">Our Blog</h2>
                    </div>

                    <div className="flex flex-wrap justify-center -mx-3">
                        <div className="flex flex-wrap w-full lg:w-1/2">
                            <div className="w-full px-3 mb-5">
                                <a href="#">
                                    <div className="relative h-64 mx-auto rounded">
                                        <img className="relative h-full w-full rounded object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80" alt="" />
                                        <div className="absolute inset-0 opacity-75 rounded"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col items-start">
                                            <span className="mb-auto py-1 px-3 text-sm  rounded-full text-green-600 uppercase font-bold">Travel</span>
                                            <span className="text-sm ">24 Jan, 2021</span>
                                            <p className="text-xl lg:text-2xl font-bold">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="w-full lg:w-1/2 px-3 mb-5">
                                <a href="#">
                                    <div className="relative mx-auto rounded h-128">
                                        <img className="relative h-full w-full rounded object-cover" src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="" />
                                        <div className="absolute inset-0 opacity-75 rounded"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col items-start">
                                            <span className="mb-auto py-1 px-3 text-sm  rounded-full text-green-600 uppercase font-bold">Travel</span>
                                            <span className="text-sm ">24 Jan, 2021</span>
                                            <p className="text-xl lg:text-2xl font-bold">Vestibulum vehicula leo eget libero eleifend.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="w-full lg:w-1/2 px-3 mb-5">
                                <a href="#">
                                    <div className="relative mx-auto rounded h-128">
                                        <img className="relative h-full w-full rounded object-cover" src="https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80" alt="" />
                                        <div className="absolute inset-0 opacity-75 rounded"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col items-start">
                                            <span className="mb-auto py-1 px-3 text-sm rounded-full text-green-600 uppercase font-bold">Travel</span>
                                            <span className="text-sm ">24 Jan, 2021</span>
                                            <p className="text-xl lg:text-2xl font-bold">Aenean convallis sapien a dignissim placerat.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap w-full lg:w-1/2">
                            <div className="w-full lg:w-1/2 px-3 mb-5">
                                <a href="#">
                                    <div className="relative mx-auto rounded h-128">
                                        <img className="relative h-full w-full rounded object-cover" src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="" />
                                        <div className="absolute inset-0 opacity-75 rounded"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col items-start">
                                            <span className="mb-auto py-1 px-3 text-sm rounded-full text-green-600 uppercase font-bold">Travel</span>
                                            <span className="text-sm ">24 Jan, 2021</span>
                                            <p className="text-xl lg:text-2xl font-bold">Vestibulum vehicula leo eget libero eleifend.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 mb-5">
                                <a href="#">
                                    <div className="relative mx-auto rounded h-128">
                                        <img className="relative h-full w-full rounded object-cover" src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" alt="" />
                                        <div className="absolute inset-0  opacity-75 rounded"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col items-start">
                                            <span className="mb-auto py-1 px-3 text-sm rounded-full text-green-600 uppercase font-bold">Travel</span>
                                            <span className="text-sm ">24 Jan, 2021</span>
                                            <p className="text-xl lg:text-2xl font-bold">Vestibulum vehicula leo eget libero eleifend.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="w-full px-3 mb-5">
                                <a href="#">
                                    <div className="relative mx-auto rounded h-64">
                                        <img className="relative h-full w-full rounded object-cover" src="https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80" alt="" />
                                        <div className="absolute inset-0 bg-gray-900 opacity-75 rounded"></div>
                                        <div className="absolute inset-0 p-6 flex flex-col items-start">
                                            <span className="mb-auto py-1 px-3 text-sm rounded-full text-green-600 uppercase font-bold">Travel</span>
                                            <span className="text-sm">24 Jan, 2021</span>
                                            <p className="text-xl lg:text-2xl font-bold">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="mt-10">
                            <Button variant={"outline"} size={'sm'} className="inline-block rounded-full bg-transparent">View More Articles</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
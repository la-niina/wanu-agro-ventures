export default function About() {
    return (
        <section>
            <div className="skew skew-top mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-green-600" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
                </svg>
            </div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-green-600" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
                </svg>
            </div>
            <div className="py-20 bg-green-600 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                            <ul className="flex flex-wrap flex-row lg:flex-col justify-center lg:justify-start space-x-6 lg:space-x-0">
                                <li>
                                    <button className="text-2xl lg:text-4xl mb-4 text-green-500 hover:text-white font-bold">Danny Bailey</button>
                                </li>
                                <li>
                                    <button className="text-2xl lg:text-4xl mb-4 text-green-500 hover:text-white font-bold">Ian Brown</button>
                                </li>
                                <li>
                                    <button className="text-2xl lg:text-4xl mb-4 text-green-500 hover:text-white font-bold">Daisy Carter</button>
                                </li>
                                <li>
                                    <button className="text-2xl lg:text-4xl mb-4 text-green-500 hover:text-white font-bold">Dennis Robertson</button>
                                </li>
                                <li>
                                    <button className="text-2xl lg:text-4xl mb-4 text-white font-bold">Alice Bradley</button>
                                </li>
                                <li>
                                    <button className="text-2xl lg:text-4xl mb-4 text-green-500 hover:text-white font-bold">Sahra Ortiz</button>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-2/3 px-3">
                            <div className="flex p-6 flex-wrap bg-white rounded-lg shadow">
                                <div className="w-full lg:w-1/2 lg:pr-3">
                                    <img className="h-80 lg:h-auto w-full lg:w-auto object-cover rounded-lg" src="https://images.unsplash.com/photo-1484588168347-9d835bb09939?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt=""/>
                                </div>
                                <div className="w-full lg:w-1/2 lg:pl-3 lg:mt-6 order-first lg:order-last">
                                    <h4 className="text-2xl font-bold font-heading">Alice Bradley</h4>
                                    <p className="mb-6 text-gray-500">Backend Developer</p>
                                    <p className="mb-6 text-gray-500 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis at ante bibendum mollis et et mauris.</p>
                                    <p className="mb-6 text-gray-500 leading-loose">Quisque id sagittis turpis. Nulla sollicitudin rutrum eros eu dictum. Integer sit amet erat sit amet lectus lacinia mattis. Donec est tortor, fermentum at urna a, accumsan suscipit sem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-green-600" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
                </svg>
            </div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-green-600" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
                </svg>
            </div>
        </section>
    )
}
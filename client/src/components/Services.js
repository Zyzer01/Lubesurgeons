import React from 'react';

function Services(props) {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-16 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 -ml-32">
                        <img class="object-cover object-center rounded" alt="hero" src="./images/Car trunk area.png" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="sm:text-4xl text-2xl font-bold title-font text-balablue ">Services We Provide</h1>
                        <div class="flex mt-3 mb-5 justify-center">
                            <div class="w-16 h-1 rounded-full bg-primary inline-flex"></div>
                        </div>

                        <div class="flex container mx-auto space-x-32 items-center py-5">
                            <div>
                                <div class="w-20 h-15 inline-flex items-center rounded-full mb-5 flex-shrink-0">
                                    <img src='./images/auto service.png' alt='schedule' />
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Auot Services </p>
                                </div>
                            </div>
                            <div>
                                <div class="w-20 h-15 inline-flex items-center rounded-full mb-5 flex-shrink-0">
                                    <img src='./images/auto service.png' alt='schedule' />
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Schedule </p>
                                </div>
                            </div>
                            <div>
                                <div class="w-20 h-15 inline-flex items-center rounded-full mb-5 flex-shrink-0">
                                    <img src='./images/auto service.png' alt='schedule' />
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Schedule </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex container mx-auto space-x-32 items-center py-5">
                            <div>
                                <div class="w-20 h-15 inline-flex items-center rounded-full mb-5 flex-shrink-0">
                                    <img src='./images/auto service.png' alt='schedule' />
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Schedule </p>
                                </div>
                            </div>
                            <div>
                                <div class="w-20 h-15 inline-flex items-center rounded-full mb-5 flex-shrink-0">
                                    <img src='./images/auto service.png' alt='schedule' />
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Schedule </p>
                                </div>
                            </div>
                            <div>
                                <div class="w-20 h-15 inline-flex items-center rounded-full mb-5 flex-shrink-0">
                                    <img src='./images/auto service.png' alt='schedule' />
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Schedule </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex container mx-auto space-x-32 items-center py-5">
                            <div>
                                <div class="w-20 h-15 inline-flex items-center rounded-full mb-5 flex-shrink-0">
                                    <img src='./images/auto service.png' alt='schedule' />
                                </div>
                                <div class="flex-grow">
                                    <p class="leading-relaxed text-base">Schedule </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
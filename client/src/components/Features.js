import React from 'react';

function Features(props) {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-16 py-24 mx-auto">
                    <div class="text-center mb-20">
                        <h1 class="sm:text-4xl text-2xl font-bold title-font text-balablue mb-4">How It Works</h1>
                        <div class="flex mt-6 justify-center">
                            <div class="w-16 h-1 rounded-full bg-primary inline-flex"></div>
                        </div>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <div class="w-32 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                                <img src='./images/shedule feature.png' alt='schedule' />
                            </div>
                            <div class="flex-grow lg:px-8">
                                <p class="leading-relaxed text-base">Schedule your LubeSurgery
                                    using the website, or our
                                    iOS/Android app.
                                </p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <div class="w-32 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                                <img src='./images/get a quote.png' alt='schedule' />
                            </div>
                            <div class="flex-grow lg:px-8">
                                <p class="leading-relaxed text-base">Get a Quote.
                                    Provide your location and
                                    our mechanics come to you.
                                </p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <div class="w-32 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                                <img src='./images/car maintenance.png' alt='schedule' />
                            </div>
                            <div class="flex-grow lg:px-8">
                                <p class="leading-relaxed text-base">Track your services,
                                    text your mechanic,
                                    receive notifications.
                                </p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
                            <div class="w-32 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
                                <img src='./images/wallet pay.png' alt='schedule' />
                            </div>
                            <div class="flex-grow lg:px-8">
                                <p class="leading-relaxed text-base">Rate and pay when
                                    your service is complete.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Features;
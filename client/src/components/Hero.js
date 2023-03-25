import React from 'react';

function Hero(props) {
    return (
        <div>
            <section class="container px-16 text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow -my-52 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="sm:text-5xl mb-1 text-3xl font-bold tracking-wide text-balablue">Spoil yourself with
                            <br class="hidden lg:inline-block" /><span class="md:leading-snug"> convenient car care</span>
                        </h1>
                        <div class="flex mb-4 justify-center">
                            <div class="w-12 h-1 rounded-full bg-primary inline-flex"></div>
                        </div>
                        <p class="mb-8 text-lg leading-relaxed">On-demand car care to transform your vehicle at home or at work. All we need is your keys.</p>
                        <div class="flex justify-center">
                            <button class="mr-3 inline-flex items-center bg-balablue border-2 border-balablue py-1 px-4 focus:outline-none hover:bg-headingColor hover:border-2 hover:border-balablue md:hover:scale-75 transition-all rounded-full text-white mt-4 md:mt-0">
                                <svg width="18" height="18" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.7048 11.995L0.980386 23.4994C0.358398 23.0227 -0.00446033 22.2823 4.13989e-05 21.4987V2.51136C-0.00436654 1.72777 0.358398 0.98724 0.980386 0.51062L12.7048 11.995Z" fill="#2196F3" />
                                    <path d="M22.0084 11.995C22.0085 12.9056 21.5196 13.746 20.7279 14.1959L17.0466 16.2366L12.7048 11.995L17.0465 7.75333L20.7278 9.81408C21.5145 10.2593 22.0031 11.0912 22.0084 11.995Z" fill="#FFC107" />
                                    <path d="M17.0465 16.2366L3.68132 23.6995C3.31115 23.8946 2.89933 23.9976 2.48086 23.9996C2.04326 24.0079 1.61259 23.8898 1.24036 23.6594C1.15098 23.6106 1.06413 23.5571 0.980286 23.4993L12.7048 11.995L17.0465 16.2366Z" fill="#F44336" />
                                    <path d="M17.0465 7.75342L12.7049 11.995L0.980408 0.510615C1.06435 0.452843 1.1511 0.399385 1.24048 0.350523C1.98739 -0.102088 2.92009 -0.117375 3.68144 0.310476L17.0465 7.75342Z" fill="#4CAF50" />
                                </svg>
                                <span class="ml-3 flex items-start flex-col leading-none">
                                    <span class="text-xs text-gray-300">Download on</span>
                                    <span class="title-font font-medium text-sm">Google Play</span>
                                </span>
                            </button>
                            <button class="inline-flex items-center bg-balablue border-2 border-balablue py-1 px-4 focus:outline-none hover:bg-headingColor hover:border-2 hover:border-balablue md:hover:scale-75 transition-all rounded-full text-white mt-4 md:mt-0">
                            <svg width="19" height="21" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.848 23.04C15.5472 24.3023 14.112 24.1057 12.744 23.5103C11.2896 22.9032 9.96 22.8648 8.424 23.5103C6.5112 24.336 5.496 24.096 4.344 23.04C-2.16 16.344 -1.2 6.144 6.192 5.76C7.9848 5.856 9.24 6.7512 10.296 6.8256C11.8656 6.5064 13.368 5.592 15.048 5.712C17.0663 5.8752 18.576 6.672 19.584 8.1048C15.432 10.6008 16.416 16.0728 20.2297 17.6088C19.4663 19.6128 18.4872 21.5928 16.8457 23.0568L16.848 23.04ZM10.152 5.688C9.9576 2.712 12.3696 0.264002 15.144 0.0240021C15.5256 3.456 12.024 6.024 10.152 5.688Z" fill="#FCFCFC" />
                                </svg>
                                <span class="ml-3 flex items-start flex-col leading-none">
                                    <span class="text-xs text-gray-300">Get it on</span>
                                    <span class="title-font font-medium text-sm">App Store</span>
                                </span>
                            </button>
                        </div>

                    </div>
                    <div class="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 -mr-32">
                        <img href='null' class="object-cover object-center rounded" alt="hero" src="./images/car and yellow background.png" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
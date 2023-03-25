import React from 'react';

function Choose(props) {
    return (
        <div>
            <section class="container px-32 py-10">
                <div class="text-center mb-20">
                    <h1 class="sm:text-4xl text-2xl font-bold title-font text-balablue mb-4">Why Choose LubeSurgeons?</h1>
                    <div class="flex mt-6 justify-center">
                        <div class="w-16 h-1 rounded-full bg-primary inline-flex"></div>
                    </div>
                </div>
                <div class="text-center">
                    <img class="object-cover object-center w-full" src='./images/open car.png' alt='open car engine' />
                </div>
            </section>
        </div>
    );
}

export default Choose;
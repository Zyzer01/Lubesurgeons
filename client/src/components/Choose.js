import React from 'react';
import Heading from './utilities/Heading';

function Choose(props) {
    return (
        <div>
            <section class="container px-32 py-10">
                <Heading
                    title="Why Choose LubeSurgeons?"
                />
                <div class="text-center">
                    <img class="object-cover object-center w-full" src='./images/open car.png' alt='open car engine' />
                </div>
            </section>
        </div>
    );
}

export default Choose;
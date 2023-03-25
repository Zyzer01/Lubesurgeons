import React from 'react';

function Heading(props) {
    return (
        <div>
            <div class="text-center mb-16">
                <h1 class="sm:text-4xl text-2xl font-bold title-font text-balablue mb-4">{props.title}</h1>
                <p class="mb-8 text-lg text-secondary leading-relaxed">{props.sub}</p>
                <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-primary inline-flex"></div>
                </div>
            </div>
        </div>
    );
}

export default Heading;
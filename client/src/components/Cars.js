import React from 'react';
import Heading from './utilities/Heading';
import Flexitems from './utilities/Flexitems';

function Cars(props) {
    return (
        <div>
            <section>
                <Heading
                    title="Cars"
                    sub="We service nearly all makes and models."
                />
                <div class="flex container justify-center space-x-16 items-center py-5">
                    <Flexitems
                        url='./images/toyota-logo-vector 1.png'
                        alt='toyota'
                    />
                    <Flexitems
                        url='./images/honda-silver-logo-vector 1.png'
                        alt='honda'
                    />
                    <Flexitems
                        url='./images/jeep-auto-vector-logo 1.png'
                        alt='jeep'
                    />
                    <Flexitems
                        url='./images/bmw-logo-vector-01 1.png'
                        alt='toyota'
                    />
                    <Flexitems
                        url='./images/volkswagen-logo-vector 1.png'
                        alt='volkswagen'
                    />
                    <Flexitems
                        url='./images/hyundai-motor-vector-logo 1.png'
                        alt='hyundai'
                    />
                </div>
            </section>
        </div>
    );
}

export default Cars;
import React from 'react';
import Button from './utilities/Button';

function Header(props) {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="flex container mx-auto justify-between items-center px-12 py-5">
                    <div>
                        <a href='null' class="w-45 title-font font-medium text-gray-900 mb-4 md:mb-0">
                            <img alt="ecommerce" src="./images/lubsurgeons logo.png" />
                        </a>
                    </div>
                    <div>
                        <nav class="text-balablue">
                            <a href='null' class="mr-5 text-balablue hover:text-gray-900">Pricing</a>
                            <a href='null' class="mr-5 text-balablue hover:text-gray-900">About</a>
                            <a href='null' class="mr-5 text-balablue hover:text-gray-900">FAQ</a>
                            <a href='null' class="mr-5 text-balablue hover:text-gray-900">How It Works</a>
                        </nav>
                    </div>
                    <div>
                        <a href='null' class="inline-flex items-center mr-2 py-1 px-3 focus:outline-none underline text-balablue mt-4 md:mt-0">Sign in</a>
                        <Button
                            text="Book Now"
                        />
                    </div>
                </div>
            </header>
        </div>

    );
}

export default Header;
import React from 'react';
import Heading from './Heading';

function Cars(props) {
    return (
        <div>
            <section>
                {<Heading 
                    title="Cars"
                    content=""
                />}
            </section>
        </div>
    );
}

export default Cars;
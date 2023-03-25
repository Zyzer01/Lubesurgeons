import React from 'react';

function Flexitems(props) {
    return (
        <div>
            <div class="w-20 h-15 inline-flex items-center rounded-full mb-5 flex-shrink-0">
                <img src={props.url} alt={props.alt} />
            </div>
        </div>
    );
}

export default Flexitems;
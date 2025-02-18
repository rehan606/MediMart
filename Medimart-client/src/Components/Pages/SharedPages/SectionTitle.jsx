import React from 'react';

const SectionTitle = ({headding, subHeadding}) => {
    return (
        <div>
            <p>{subHeadding}</p>
            <h2>{headding}</h2>
        </div>
    );
};

export default SectionTitle;
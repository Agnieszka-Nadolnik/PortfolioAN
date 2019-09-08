import React from 'react';

const Tech = (props) => {
    const {icon, name} = props.tech;

    return (
        <div className="sample_tech">
            <i className={icon} data-aos="flip-right"></i>
            <h5>{name}</h5>
        </div>
    )
}

export default Tech;

import React, {Component} from 'react';



class Page extends Component {

    render() {
        return(
            <figure className="slider-cards">
                <div className="slider-cards__content">
                    <div className="slider-cards__item weekly_3"></div>
                    <div className="slider-cards__item weekluy_8"></div>
                    <div className="slider-cards__item"></div>
                </div>
            </figure>
        )
    }
}


const Banner = () => {
    return(
        <div className="banner_container">
            <div className="text_content">
                <h2>Cześć! nazywam się <span>Agnieszka Nadolnik</span> ...</h2>
                <p>Junior Front-End Developer </p>
            </div>
            <Page />
        </div>
    )
}

export default Banner;
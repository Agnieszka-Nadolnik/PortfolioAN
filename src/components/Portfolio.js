import React from 'react';
import Project from './Project.js';

const Portfolio = (props) =>  {

        const sampleProject = props.project.map(sample => < Project key={sample.id} project={sample}/>)
        return(
            <section id='portfolio' className='portfolio_container'>
                <div className="portfolio_title_container">
                    <h4 className='title'> Portfolio</h4>
                    <i className="fas fa-code"></i>
                    <p>Zapraszam do zapoznania się z moim portfolio. Baza będzie regulanie aktualizowana o nowe projekty.</p>           
                </div>
                <div className="projects_container">
                    {sampleProject}
                </div>
            </section>
        )
}

export default Portfolio;
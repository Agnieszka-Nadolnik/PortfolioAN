import React from 'react';

const Project = (props) => {
    const {id, name, classPage, gitHub, live, description, grid} = props.project;

    const projectStyle = {
        backgroundImage: `url(${require(`../img/projects/portfolio${id}.jpg`)})`,
        gridArea: grid
    }
   
    return (
        <div className={classPage + ' sample_project'} style={projectStyle} onClick={(e) => {
            console.log('działa');
            let element = e.currentTarget.firstElementChild;
            if(!element.classList.contains('active_portfolio')) {
                element.classList.add('active_portfolio');
                element.style.animation = "animation 1s both"
            } else if(element.classList.contains('active_portfolio')) {
                element.classList.remove('active_portfolio');
                element.style.animation = "backanimation 1s both"
            }
        }}>
                <div className="description_container">
                <p>{name}</p>
                <p className='des_txt'>{description}</p>
                <div className='icon_container'>
                    <a href={gitHub} target='blank'><i className="devicon-github-plain"></i></a>
                    <a href={live} target='blank'><i className="fas fa-desktop"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Project;

        
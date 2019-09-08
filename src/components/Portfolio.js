import React from 'react';
import Project from './Project.js';

const Portfolio = (props) =>  {

        const sampleProject = props.project.map(sample => < Project key={sample.id} project={sample}/>)
        return(
            <section id='portfolio' className='portfolio_container'>
                <div className="portfolio_title_container">
                    <h4 className='title'> Portfolio</h4>
                    <i className="fas fa-code"></i>
                    <p>Zapraszam do zapoznania się z moim portfolio. Baza będzie regulanie aktualizowana o nowe projekty</p>           
                </div>
                <div className="projects_container">
                    {sampleProject}
                </div>
            </section>
        )
}

export default Portfolio;



// class Projects extends Component {

//     handleShowProject = () => {
//         const container = document.querySelector('.projects_container');

//         ProjectData.forEach(pr => {
//             const projectContainer = document.createElement('div');
//             const desContainer = document.createElement('div');
//             const txt = document.createElement('p');
//             const description = document.createElement('p');
//             const iconContainer = document.createElement('div');
//             const linkGitHub = document.createElement('a');
//             const linkLive = document.createElement('a');
//             const iconGitHub = document.createElement('i');
//             const iconLive = document.createElement('i');
           

//             container.appendChild(projectContainer);
//             projectContainer.appendChild(desContainer);
//             desContainer.appendChild(txt);
//             desContainer.appendChild(description);
//             desContainer.appendChild(iconContainer);
//             iconContainer.appendChild(linkGitHub);
//             iconContainer.appendChild(linkLive);
//             linkGitHub.appendChild(iconGitHub);
//             linkLive.appendChild(iconLive);

//             projectContainer.classList.add('sample_project', pr.classPage);
//             desContainer.classList.add('description_container');
//             iconContainer.classList.add('icon_container');
//             iconGitHub.classList.add('devicon-github-plain')
//             iconLive.classList.add('fas');
//             iconLive.classList.add('fa-desktop');
//             description.classList.add('des_txt');

           
//             projectContainer.style.backgroundImage = `url(${require(`../img/projects/portfolio${pr.id}.jpg`)})`;
//             projectContainer.style.gridArea = pr.grid;
//             txt.textContent = pr.name;
//             description.textContent = pr.description;
//             linkGitHub.href = pr.gitHub;
//             linkGitHub.setAttribute('target', 'blank');
//             linkLive.href = pr.live;
//             linkLive.setAttribute('target', 'blank');

//             projectContainer.addEventListener('click', () => {
//                     desContainer.classList.toggle('active_portfolio');
//             })
//         })
//     }
//     render() {
//         window.addEventListener('load', this.handleShowProject);

//         return (
           
//         )
//     }
// }
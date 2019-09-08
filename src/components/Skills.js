import React, {Component} from 'react'; 

class Skills extends Component {
    render() {
        return(
            <section className="skills_container">
                <div className="sample_skill">
                    <div className="icon_container">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                    <h6>RWD</h6>
                    <p>Wykorzytuję jednostki relatywne. Korzystam również z Flexbox oraz CSS Grid.</p>
                </div>
                <div className="sample_skill">
                    <div className="icon_container">
                        <i className="devicon-photoshop-plain"></i>
                    </div>
                    <h6>Photoshop</h6>
                    <p>Podstawowa umiejętność cięcia Layoutów, oraz edycji grafik.</p>
                </div>
                <div className="sample_skill">
                    <div className="icon_container">
                        <i className="devicon-git-plain"></i>
                    </div>
                    <h6>Git</h6>
                    <p>Podstawowe wykorzystanie - publikacja, tworzenie kopii zapasowych, edycja.</p>
                </div>
            </section>
        )
    }
}
export default Skills;
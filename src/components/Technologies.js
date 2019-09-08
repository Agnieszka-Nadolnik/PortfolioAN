import React from 'react'; 
import Tech from './Tech';
import AOS from 'aos';


const Technologies = (props) => {
    AOS.init();
    const techSample = props.tech.map(sample => <Tech key={sample.id} tech={sample}/> )
    return (
        <section id='technologies' className='technologies_container'>
            <div className='technologies_title'>
                <h4 className='title'>Technologie i Umiejętności</h4>
                <p>...które udało się się poznać i przyswoić</p>
            </div>
            <div className="technologies_content">
                {techSample}
            </div>
        </section>
    )
}

export default Technologies;

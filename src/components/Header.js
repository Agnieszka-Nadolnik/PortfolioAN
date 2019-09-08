import React, {Component} from 'react';
import Menu from './Menu.js';

class Header extends Component {
    render() {
        return (
            
            <section id='home' className="header_container">
                <div className="navigation_container">
                    <h1>.Agnieszka Nadolnik</h1>
                    <Menu/>
                </div>
            </section>
        
        )
    }
}

export default Header;
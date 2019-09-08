import React, {Component} from 'react';

class Menu extends Component {

    state = {
        class: false,
    }

    

    handleShowMenu = () => {
        const buttonMenu = document.querySelector('.show_menu_button');
        const menu = document.querySelector('nav');
        menu.classList.toggle('active_menu');

        this.setState({
            class: true,
        })

        if(menu.classList.contains('active_menu')) {
            buttonMenu.textContent = '.Zamknij';
           
        } else if(!menu.classList.contains('active_menu')) {
            buttonMenu.textContent = ".Menu"
        }
    }

    handleScroll(e, section) {
        console.log(this);

        e.preventDefault();

        const element = document.querySelector(section);
         window.scroll({
             behavior: 'smooth',
             left: 0,
             top: element.getBoundingClientRect().top - 50 + window.scrollY
            }); 

        if(this.state.class === true) {
            document.querySelector('nav').classList.remove('active_menu');
            document.querySelector('.show_menu_button').textContent = '.Menu';
        }
    }

    render() {
        return (
            <>
            <button className="show_menu_button" onClick={this.handleShowMenu}>.Menu</button>  
            <nav>
                <ul>
                    <li onClick = {(e) => this.handleScroll(e, '.header_container')}>Home</li>
                    <li onClick = {(e) => this.handleScroll(e, '.about_container')}>O mnie</li>
                    <li onClick = {(e) => this.handleScroll(e, '.technologies_container')}>Technologie</li>
                    <li onClick = {(e) => this.handleScroll(e, '.portfolio_container')}>Portfolio</li>
                    <li onClick = {(e) => this.handleScroll(e, '.contact_container')}>Kontakt</li>
                </ul>
            </nav>
        </>
        )
    }
}




export default Menu
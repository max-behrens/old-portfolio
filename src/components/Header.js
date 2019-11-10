import React from 'react'

import {
    Nav,
    NavLink,
    NavToggler,
    NavBrand,
    Navbar,
} from '../elements'


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isToggleOn: false };

        
        this.handleClick = this.handleClick.bind(this);
    }

    

    handleClick() {

        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }



    render() {

        return (
            <Navbar>
                <NavBrand>{this.props.title}</NavBrand>

                <Nav showMenu={this.state.isToggleOn} >

                    {this.props.menuLinks.map(link => (
                        <NavLink key={link.name} to={link.link}>{link.name}</NavLink>
                    ))}

                </Nav>

                <NavToggler showMenu={this.state.isToggleOn} handleClick={this.handleClick} />
                
            </Navbar>
        );
    }

}




export default Header;




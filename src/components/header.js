import React, { useState } from 'react';
import PropTypes from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import logo from '../images/logo.png'

const Header = ({ siteTitle }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar color="light" light expand="sm">
        <div className="container">
      <NavbarBrand href="/">
        
        
       <img style={{width: '15rem'}} src={logo} /> 
        
        
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <DropdownItem divider />
           
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://surfacegroup.com">Surface Group</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Social Media
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="https://www.amazon.com/How-Made-500-000-Selling/dp/1460233778">Facebook</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink href="https://www.amazon.com/Manage-Your-Mind-Life/dp/1483679594">Linkedin</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink href="https://www.amazon.com/Tablets-Emotional-Wisdom-Gopi-Nair/dp/1982240490">Instagram</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

          </Nav>
        </Collapse>
        </div>
      </Navbar>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
import React from 'react';
import { Navbar } from 'react-bootstrap';


export default function Header(props) {
  return (
    <header className="header">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            CRM
          </Navbar.Brand>
        </Navbar.Header>
        <div className="header__wrap">
          {props.children}
        </div>
      </Navbar>
    </header>

  )
}

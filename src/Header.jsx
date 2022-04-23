import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light" style={{padding:'0px'}}>
        <Container style={{display: 'flex', justifyContent: 'center'}}>
          <Navbar.Brand href="#" style={{fontSize:"28px"}}>ThisMeru</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
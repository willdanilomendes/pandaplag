import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Navbar } from './styles';
import ButtonContactColor from '../button/buttonContact';
import Logo from '../../assets/img/logo.svg';

function navbar() {
  return(
    <Container>
      <Navbar className="navbar navbar-expand-lg">
      <div className="container">
      <Link className="navbar-brand" to="/">
        <img src={Logo} alt=""/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" >Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" >Faq</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/" >Prices</Link>
          </li>
          <li className="nav-item">
            <ButtonContactColor className="nav-link" to="/contato">Contact</ButtonContactColor>
          </li>
        </ul>
      </div>
    </div>
  </Navbar>
  </Container>
  )
}

export default navbar;
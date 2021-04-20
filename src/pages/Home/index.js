import React from 'react';
import Navbar  from '../../components/navbar/';
import Header from '../../components/header/';
import Partners  from '../../components/partners/';
import Features  from '../../components/features/';
import Used from '../../components/used/';
import Works from '../../components/works/';
import About from '../../components/about/';
import Contact from '../../components/contact/';
import Footer from '../../components/footer/';

import { Container } from './styles';


function Home() {
  return (
    <Container>
       <Navbar />
       <Header/>
        <Partners />
        <Used />
        <Features />
        <Works />
        <About />
        <Contact />
        <Footer />
    </Container>
  );
}

export default Home;
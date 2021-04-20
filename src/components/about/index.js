import React from 'react';
import BgAbout from '../../assets/img/bg-about.png';

import { Container } from './styles';

function About() {
  return (
   <Container>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h6 className="About__subTitle">About</h6>
          <h2 className="About__title">PandaPlag Plagiarism Checker scans 20 billions contents</h2>
          <p>We will open your document and compare your content with more 20 billions contents, finishing it, you will have in hand everything is wrong with your document and can make decisions to make your document safe.</p>
          <p><strong>Perfect for Students, Teachers and Copywriters.</strong></p>
        </div>
        <div className="col-md-6">
          <img src={BgAbout} alt="" class="w-100"/>
        </div>
      </div>
    </div>
   </Container>
  );
}

export default About;
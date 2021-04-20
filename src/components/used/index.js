import React from 'react';

import { Container, Use } from './styles';
import IconFiles from '../../assets//img/icon-files.svg'; 

function Used() {
  return(
    <Container>
      <div className="container">
        <div className="row">
            <div className="col-md-12">
            <Use>
            <img src={IconFiles} alt=""/>
            <h3>Use our Plagiarism Checker for free, pay only if you want to see deeply </h3>
            <p>You can use our Plagiarism Checker for free, you have to pay only if you want to see where the plagium is, in this case you can use PayPal to pay us and we will delivery the data to you</p>
            </Use>
            </div>
        </div>
      </div>
    </Container>
  )
}

export default Used;
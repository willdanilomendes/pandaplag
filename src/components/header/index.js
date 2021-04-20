import React from 'react';
import {Link} from 'react-router-dom';
import { Container, HeaderDefault, HeaderDefaultPast, HeaderDefaultBox } from './styles';
import ButtonStartAnalyticsPast from '../button/ButtonStartAnalyticsPast';
import AcceptMaxFiles  from './dropzone';

function header() {
  return (
   <Container>
     <HeaderDefault>
     <div className="container">
       <div className="row">
        <div className="col-md-6">
          <h1 className="HeaderDefault__title"> Very smart Plagiarism Checker tool</h1>
          <h2 className="HeaderDefault__subTitle">Perfect for <strong>Students, Teachers and Copywriters.</strong></h2>
          <h3 className="HeaderDefault__text">to help you <strong>detect</strong>  plagiarism on your files</h3>
        </div>
        <div className="col-md-4 offset-md-2">
          <HeaderDefaultPast>
            <h6>Paste the text you want to <strong>check</strong> for <strong>free</strong></h6>
            <HeaderDefaultBox>
              <form action="" method="post">
                <textarea name="" className="form-control" id=""  rows="7"></textarea>
               <div className="HeaderDefaultBoxStart">
                  <ButtonStartAnalyticsPast type="submit" class="btn">Start Analysis</ButtonStartAnalyticsPast>
                  <span>Paste the text and click start</span>
               </div>
              </form>
            </HeaderDefaultBox>
          </HeaderDefaultPast>
          {/* DROP FILES */}
          <AcceptMaxFiles />
          {/* DROP FILES */}
        </div>
       </div>
     </div>
     </HeaderDefault>
   </Container>
  )
}

export default header;
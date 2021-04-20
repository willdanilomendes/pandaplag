import React from 'react';
import { Container, WorksCard, WorksList, WorksListItem, WorksBackground } from './styles';
import IconFilesCard from '../../assets/img/icon-files-card.svg';
import iconAnaly from '../../assets/img/icon-analysis.svg';
import IconSearch from '../../assets/img/icon-search.svg';
import IconCompare from '../../assets/img/icon-compare.svg';
import IconReport from '../../assets/img/icon-report.svg';
import IconCheck from '../../assets/img/icon-check.svg';
import IconOne from '../../assets/img/icon-one.svg';
import IconTwo from '../../assets/img/icon-two.svg';
import IconThree from '../../assets/img/icon-three.svg';
import IconFour from '../../assets/img/icon-four.svg';
import IconFive from '../../assets/img/icon-five.svg';
import ButtonSendnow from '../button/ButtonSendNow';


function Works() {
  return(
   <Container>
     <div className="container">
       <div className="row">
         <div className="col-md-6 col-12 ">
          <div className="row">
            <h6 class="WorksContainer__subTitle">how to works</h6>
            <h2 class="WorksContainer__Title">A little more about the flow</h2>
            <WorksBackground>
              <div className="row">
                <WorksCard>
                    <img src={IconFilesCard} alt=""/>
                    <p>Select your file or Put your content</p>
                  </WorksCard>
                  <WorksCard>
                  <img src={iconAnaly} alt=""/>
                  <p>Content Analysis</p>
                </WorksCard>
                <WorksCard>
                  <img src={IconSearch} alt=""/>
                  <p>Search in 20 Bilions Sourcers</p>
                </WorksCard>
                <WorksCard>
                  <img src={IconCompare} alt=""/>
                  <p>Compare your files</p>
                </WorksCard>
                <WorksCard>
                  <img src={IconReport} alt=""/>
                  <p>Generate report</p>
                </WorksCard>
                <WorksCard>
                  <img src={IconCheck} alt=""/>
                  <p><strong>Verification finished</strong></p>
                </WorksCard>
                </div>
          </WorksBackground>
          </div>
         </div>
         <div className="col-md-4 col-12 offset-md-2">
           <WorksList>
              <h6>how to works</h6>
                <WorksListItem>
                  <img src={IconOne} alt=""/>
                 <div>
                 <h6>Select your file or Put your content</h6>
                  <p>Select your file or Put your content</p>
                 </div>
                </WorksListItem>
                <WorksListItem>
                  <img src={IconTwo} alt=""/>
                 <div>
                 <h6>Select your file or Put your content</h6>
                  <p>Select your file or Put your content</p>
                 </div>
                </WorksListItem>
                <WorksListItem>
                  <img src={IconThree} alt=""/>
                 <div>
                 <h6>Select your file or Put your content</h6>
                  <p>Select your file or Put your content</p>
                 </div>
                </WorksListItem>
                <WorksListItem>
                  <img src={IconFour} alt=""/>
                 <div>
                 <h6>Select your file or Put your content</h6>
                  <p>Select your file or Put your content</p>
                 </div>
                </WorksListItem>
                <WorksListItem>
                  <img src={IconFive} alt=""/>
                 <div>
                 <h6>Select your file or Put your content</h6>
                  <p>Select your file or Put your content</p>
                 </div>
                </WorksListItem>
                <WorksListItem>
                  <img src={IconCheck} alt=""/>
                 <div>
                 <h6>Select your file or Put your content</h6>
                  <p>Select your file or Put your content</p>
                 </div>
                </WorksListItem>
           </WorksList>
         </div>
       </div>
     </div>
   </Container>
  )
}

export default Works;
import React from 'react';

import { Container, Partners, TitlePrimary, TitleSecundary } from './styled';
import placeholder from '../../assets/img/placeholder-logo.png';

function Partner() {
    return (
      <Container>
      <Partners>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <TitlePrimary>Partners</TitlePrimary>
            <TitleSecundary>Who trusts us</TitleSecundary>
          </div>
          <div className="col-md-9">
            <ul className="list-unstyled">
              <li><img src={placeholder} alt=""/></li>
            </ul>
          </div>
        </div>
      </div>
      </Partners>
    </Container>
    );
}

export default Partner;


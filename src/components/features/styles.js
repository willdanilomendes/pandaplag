import styled from 'styled-components';
import * as colors from '../../assets/styles/GlobalColors';

export const Container = styled.div`
  
`;

export const BoxFeatures = styled.div`

  .boxFeatures__subTitle{
    color:${colors.bgGren};
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .boxFeatures__Title{
    color:${colors.bgGreenHight};
    font-size: 33px;
    line-height: 40px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    font-weight: 600;
    @media(min-width: ${colors.tablet}) {
      max-width: 460px;
    }
  }

  .boxFeatures__Text{
    color: ${colors.textGray};
    font-size: 14px;
    line-height: 21px;
    margin: 20px 0;
  }  
`;


export const BoxAbout = styled.div`
  display: flex;
  margin: 20px 0;

  .boxAbout__card__text{
    margin: 0 15px;
    h6{
      font-weight: bold;
      color: ${colors.textGray};
    }
    p{
      color: ${colors.textGray};
    }
  }
`;
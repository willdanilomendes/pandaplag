import styled from 'styled-components';
import * as colors from '../../assets/styles/GlobalColors';

export const Container = styled.div`
  padding: 60px 0;

  .About__subTitle{
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${colors.bgGren}
  }

  .About__title{
    font-weight: bold;
    font-size: 33px;
    line-height: 40px;
    color: ${colors.bgGreenHight};
  }

  p{
    color: ${colors.text};
    padding: 15px 0;
    strong{
      color: ${colors.bgGren};
    }
  }
`;



import styled from 'styled-components';
import * as colors from '../../assets/styles/GlobalColors';

export const Container = styled.div`
  padding: 60px 0;
`;

export const Use = styled.div`
  background: ${colors.bgGrey};
  display: flex;
  border-radius: 8px;
  align-items: center;
  padding: 24px;
  h3{
    font-size: 18px;
    color: ${colors.bgGreenHight};
    font-weight: 600;
    margin: 0 10px;
    @media (min-width: ${colors.tablet}){
      max-width: 400px;
    }
  }
`;
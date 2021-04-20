import styled from 'styled-components';

// IMPORT TODAS AS CORES
import * as colors from '../../assets/styles/GlobalColors';


export const Container = styled.div`
  padding: 20px 0;
`;

export const Partners = styled.section`
  display: flex;
  align-items: center;
  height: 60px;
`;

export const TitlePrimary = styled.h6`
  color:${colors.bgGren};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const TitleSecundary = styled.h2`
  color: ${colors.bgGreenHight};
  font-weight: bold;
  font-size: 23px;
`;

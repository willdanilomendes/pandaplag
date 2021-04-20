import styled from 'styled-components';
import * as colors from '../../assets/styles/GlobalColors';
import BackgroundCards from '../../assets//img/bg-flow.png';

export const Container = styled.div`
background: ${colors.bgGrey};
  padding: 60px 0;

  .WorksContainer__subTitle{
    color:${colors.bgGren};
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .WorksContainer__Title{
    color:${colors.bgGreenHight};
    font-size: 33px;
    line-height: 40px;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    font-weight: 600;
    margin: 0 0px 20px 0px;
    @media(min-width: ${colors.tablet}) {
    }
  }
`;

export const WorksCard = styled.div`
  background: ${colors.bgWhite};
  max-width: 160px;
  text-align: center;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  margin: 30px 30px 0 0;
  @media (max-width:${colors.tablet}){
    margin: 10px auto;
  }
  
  img{
    max-width: 33px;
    padding: 15px 0;
    margin: 0 auto;
  }
`;

export const WorksBackground = styled.div`
  @media (min-width: ${colors.tablet}){
    background: url(${BackgroundCards}) center center no-repeat;
    background-position: -38px 90px;
  }
`;
export const WorksList = styled.div`
  background: linear-gradient(26.17deg, #35756C 1.56%, #46AB7E 120.84%);
  border-radius: 8px;
  padding: 27px;

  h6{
    color: ${colors.bgWhite};
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;

export const WorksListItem = styled.div`
  grid-template-columns: 1fr 1fr;
  display: flex;
  align-items: flex-start;
  margin: 20px 0;

  h6{
    font-weight: 600;
    letter-spacing: normal;
    text-transform: none;
    color: ${colors.bgWhite};
  }
  p{
    color: ${colors.bgWhite};
  }
  img{
    margin: 0 10px 0 0;
  }
`;

export const WorkListButton = styled.button`
  background: ${colors.bgGren};
  color: ${colors.bgWhite};
  font-weight: bold;
  border-radius: 8px;
`;

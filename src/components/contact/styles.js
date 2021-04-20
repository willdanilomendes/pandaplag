import styled from 'styled-components';
import * as colors from '../../assets/styles/GlobalColors';
import BgContact from '../../assets/img/bg-contact.jpg';

export const Container = styled.div`
background: #E3F5EA;
background-size: cover;
align-items: center;
display: flex;
padding: 20px 0;
@media (min-width: ${colors.tablet}){
  align-items: center;
  display: flex;
  min-height: 500px;
  padding: 60px 0;
  background: url(${BgContact}) center top no-repeat;
}

  .contact__title{
    font-weight: bold;
    font-size: 33px;
    line-height: 40px;
    color: ${colors.bgGreenHight};
    @media (min-width: ${colors.tablet}){
      max-width: 300px;
    }
  }
`;


export const FormContact = styled.div`
  background: ${colors.bgWhite};
  padding: 24px;
  border-radius: 8px;
  
  label{
    font-weight: bold;
    color: ${colors.bgGreenHight};
    margin: 10px 0;
  }

  input, textarea {
    border-radius: 8px;
    border: 1px solid #E5E5E5;
  }

`;
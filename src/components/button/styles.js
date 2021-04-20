import styled from 'styled-components';
import * as colors from '../../assets/styles/GlobalColors';

export const Container = styled.div`
  
`;

export const Button = styled.button`
  background : ${colors.bgGren};
  color : ${colors.bgWhite};
  font-weight: bold;
  border-radius: 8px;
  width: 100%;
  padding: 20px 0;
  border: transparent;
  margin: 10px 0;
  &:hover{
    color : ${colors.bgWhite};
    background : ${colors.bgGreenHight};
  }
`;

export const ButtonContactColor = styled.button`
  background : ${colors.bgWhite};
  color : ${colors.bgGren};
  box-shadow: 0px 4px 50px 10px rgba(0, 0, 0, 0.05);
  font-weight: bold;
  border-radius: 8px;
  width: 100%;
  padding: 10px 45px;
  border: transparent;
  &:hover{
    color : ${colors.bgWhite};
    background : ${colors.bgGreenHight};
  }
`;

export const ButtonCheckFeatures = styled.button`
  background : transparent;
  color : ${colors.bgGren};
  font-weight: bold;
  border: transparent;
  &:hover{
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export const ButtonStart = styled.button`
  background : transparent;
  color : ${colors.bgGren};
  border: 2px solid ${colors.bgGren};
  border-radius: 5px;
  padding: 10px 50px;
`;


export const ButtonPay = styled.button`
  
`;
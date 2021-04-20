import styled from 'styled-components';
import * as colors from '../../assets/styles/GlobalColors';

export const Container = styled.div`
    .dropzone{
      border: 2px dashed ${colors.bgGren};
      align-items: center;
      padding: 20px;
      border-width: 2px;
      border-radius: 2px;
      color: rgb(189, 189, 189);
      outline: currentcolor none medium;
      transition: border 0.24s ease-in-out 0s;
      p{
        color: ${colors.bgGren};
        font-weight: bold;
        text-align: center;
      }
    }

    .effectDiv{
      position: fixed;
      margin: 0 auto;
      width: 20%;
      right: 0;
      bottom: 0;
      top: 0;
      background: white;
      align-items: center;
      display: flex;
       &__title{
          font-weight: bold;
          color: ${colors.bgGren};
          text-align: center;
          font-size: 50px;
       }
       &__btnPay{

       }
      }
`;

export const HeaderDefault = styled.div`
  background: linear-gradient(to left, #F5FAF8 50%, #FFF 50%);
  height: auto;
  align-items: center;
  display: flex;
  
  @media(min-width: ${colors.tablet}){
    height: 600px;
  }

  .HeaderDefault__title{
    font-size: 50px;
    line-height: 70px;
    display: flex;
    letter-spacing: -0.01em;
    font-weight: 600;
    margin: 0 0 14px  0;
    color: ${colors.text};
    
    /* strong{
      color: ${colors.bgGren};
    } */
  }

  .HeaderDefault__subTitle{
    font-size: 14px;
    line-height: 21px;
    color: ${colors.textGray};
  }

  .HeaderDefault__text{
    font-size: 18px;
    line-height: 21px;
    color: ${colors.textGray};
    margin: 10px 0;
    strong{
      background: #FB7B76;
      color: ${colors.bgWhite};
      padding: 5px;
    }
    
    @media (min-width: ${colors.tablet}){
      margin: 60px 0 0 0;
    }
  }
`;

export const HeaderDefaultPast = styled.div`

h6{
  align-items: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${colors.textGray};
  text-align: center;
  font-size: 14px;
  margin: 0 0 15px 0;
}
`;

export const HeaderDefaultBox = styled.div`
  background: ${colors.bgWhite};
  padding: 24px;
  border-radius: 8px;

  .HeaderDefaultBoxStart{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
  }
`;


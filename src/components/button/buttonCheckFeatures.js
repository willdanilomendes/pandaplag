import React from 'react';

import { Container, ButtonCheckFeatures } from './styles';
import IconCheck from '../../assets/img/icon-check.svg'; 

function ButtonCheck (){
  return(
    <ButtonCheckFeatures><img src={IconCheck} alt=""/> Check more features</ButtonCheckFeatures>
  )
}

export default ButtonCheck;
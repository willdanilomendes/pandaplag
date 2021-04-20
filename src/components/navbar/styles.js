import styled from 'styled-components';
import * as colors from '../../assets/styles/GlobalColors';

// IMPORTA VARIANTES DE CORES
export const Container = styled.div``;


/* NAVBAR PRINCIPAL */
export const Navbar = styled.nav`
background: transparent;
box-shadow: 0px 4px 50px 10px rgba(0, 0, 0, 0.05);
display: flex;
align-items: center;
height: 80px;

    ul{
      li{
        margin: 0 10px;
        a{
          color: ${colors.textGray};
          &:hover{
            color: ${colors.bgGren};
          }
        }
      }
    }
`;

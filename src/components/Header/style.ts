import styled from 'styled-components';

import { COLORS } from '../../style';

export const Logo = styled.img`
  max-width: 168px;

  @media screen and (max-width: 800px) {
    max-width: 105px;
  }
`;

export const Menu = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: ${COLORS.black};
  border-bottom: 2px solid ${COLORS.primary};

  @media screen and (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

export const ButtonLink = styled.span`
  color: ${COLORS.white};
  border: 1px solid ${COLORS.white};
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media screen and (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${COLORS.primary};
    border-radius: 0;
    border: 0;
    text-align: center;
  }
`;

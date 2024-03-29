import styled from 'styled-components';

import { COLORS } from '../../style';

import { TitleProps } from './types'

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: ${({ backgroundColor }: TitleProps) => backgroundColor || COLORS.red};
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: ${COLORS.white};
  min-height: 197px;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 16px;
`;


import styled, { css } from 'styled-components';

import { COLORS } from '../../style';

import { InputStyledProps } from './types';

export const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;


export const LabelText = styled.span`
  color: ${COLORS.grayMedium};
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

export const Input = styled.input<InputStyledProps>`
  background: ${COLORS.grayBold};
  color: ${COLORS.grayLight};
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid ${COLORS.grayBold};

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: ${COLORS.primary};
  }

  &:focus:not([type='color']) + ${LabelText} {
    transform: scale(.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${LabelText} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }}
`;

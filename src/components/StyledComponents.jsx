import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCircle = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.color || 'black'};
  border-radius: 50%;
  margin-right: 2rem;
  ${(props) =>
    props.huge &&
    css`
      width: 5rem;
      height: 5rem;
    `};
`;

const StyledBlock = styled.div`
  width: 512px;
  border: 1px solid black;
  padding: 1rem;
`;

const colorStyles = css`
  ${({ theme, color }) => {
    console.log(theme, color);
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const sizeStyles = css`
  ${(props) =>
    props.size === 'large' &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}
    ${(props) =>
    props.size === 'small' &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `}
`;

const StyledButton = styled.button`
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.25rem;
  font-size: 1rem;
  align-items: center;
  background: #228be6;
  ${sizeStyles}
  ${colorStyles}
  & + & {
    margin-left: 1rem;
  }
`;

export default function StyledComponents() {
  return (
    <>
      <h2>Styled Components</h2>
      <StyledFlex>
        <StyledCircle color="mediumpurple" huge></StyledCircle>
        <StyledBlock>
          <StyledButton color="blue" size="large">
            BUTTON
          </StyledButton>
          <StyledButton color="gray" size="medium">
            BUTTON
          </StyledButton>
          <StyledButton color="pink" size="small">
            BUTTON
          </StyledButton>
        </StyledBlock>
      </StyledFlex>
    </>
  );
}

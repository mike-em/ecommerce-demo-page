import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, inverted, isGoogleSignIn, ...otherProps }) => {
  const CustomButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: ${inverted ? 'white' : 'black'};
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    border: ${inverted ? 'none' : '1px solid black'};
    cursor: pointer;
    transition: 100ms ease-in-out;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: white;
      color: black;
      border: ${inverted ? 'none' : '1px solid black'};
      transition: 100ms ease-in-out;
    }

    ${isGoogleSignIn
      ? css`
          background-color: #4285f4;
          border: 1px solid #4285f4
          color: white;

          &:hover {
            background-color: #357ae8;
            border: 1px solid #357ae8
            color: white;
          }
        `
      : css`null`}

    ${inverted
      ? css`
          opacity: 0.7;

          &:hover {
            background-color: black;
            opacity: 0.8;
          }
        `
      : css`null`}
  `;

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;

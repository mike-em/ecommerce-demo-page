import React from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';

const MenuItemImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  border-radius: 2px;
  position: absolute;
`;

const MenuItemWrapper = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    &:hover ${MenuItemImage} {
      transform: scale(1.1);
      transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    &:hover ${Content} {
      opacity: 0.9;
      transition: opacity 0.3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  ${props =>
    props.size
      ? css`
          height: 400px;
        `
      : css`
          height: 280px;
        `}

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  text-transform: uppercase;
  color: #4a4a4a;
`;

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemWrapper
      size={size}
      onClick={() => history.push(`/shop/${linkUrl}`)}
    >
      <MenuItemImage
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <Content>
        <Title>{title}</Title>
        <Subtitle>shop now</Subtitle>
      </Content>
    </MenuItemWrapper>
  );
};

export default withRouter(MenuItem);

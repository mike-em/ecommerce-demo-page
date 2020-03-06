import React from 'react';
import styled from 'styled-components';
import Directory from '../../components/directory/Directory';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Directory />
    </Wrapper>
  );
};

export default HomePage;

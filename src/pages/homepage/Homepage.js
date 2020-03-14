import React from 'react';
import styled from 'styled-components';
import Directory from '../../components/directory/Directory';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;

  @media (max-width: 500px) {
    padding: 20px 0;
  }

  @media (min-width: 501px) {
    padding: 20px 20px;
  }

  @media (min-width: 1024px) {
    padding: 20px 40px;
  }

  @media (min-width: 1400px) {
    padding: 20px 80px;
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Directory />
    </Wrapper>
  );
};

export default HomePage;

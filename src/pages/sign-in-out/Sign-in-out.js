import React from 'react';
import styled from 'styled-components';
import SignIn from '../../components/sign-in/Sign-in';
import SignUp from '../../components/sign-up/Sign-up';

const FormWrapper = styled.div`
  width: 950px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const SignInOut = () => {
  return (
    <FormWrapper>
      <SignIn />
      <SignUp />
    </FormWrapper>
  );
};

export default SignInOut;

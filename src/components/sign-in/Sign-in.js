import React, { Component } from 'react';
import styled from 'styled-components';
import FormInput from '../from-input/Form-input';
import Button from '../button/Button';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

const SignInWrapper = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 20px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log(err.message);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInWrapper>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <ButtonWrapper>
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </ButtonWrapper>
        </form>
      </SignInWrapper>
    );
  }
}

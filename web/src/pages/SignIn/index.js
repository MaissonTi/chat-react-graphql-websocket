import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInSuccess } from '~/store/modules/auth/actions';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import logo from '~/assests/logo.png';
import history from '~/services/history';

const LOGIN = gql`
  mutation LoginAuthMutation($email: String!, $password: String!) {
    LoginAuthMutation(input: { email: $email, password: $password }) {
      auth {
        user {
          _id
          name
          email
          file {
            path
          }
        }
        token
      }
    }
  }
`;

const schema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [loginUser] = useMutation(LOGIN, {
    onCompleted: ({ LoginAuthMutation }) => {
      const { auth } = LoginAuthMutation;

      dispatch(signInSuccess(auth.token, auth.user));
      history.push('/chat');
    },
    onError: err => {
      console.error(err);
    },
  });

  function handleSubmit({ email, password }) {
    loginUser({
      variables: { email, password },
    });
  }

  return (
    <>
      <img src={logo} alt="image" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          //type="email"
          placeholder="Email address"
          autoComplete="username"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button type="submit"> {loading ? 'Loading...' : 'Sign in'} </button>
        <Link to="/register">Register</Link>
      </Form>
    </>
  );
}

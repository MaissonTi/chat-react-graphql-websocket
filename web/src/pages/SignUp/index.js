import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assests/logo.png';
import { signUpRequest } from '~/store/modules/auth/actions';
import history from '~/services/history';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const REGISTER = gql`
  mutation LoginAuthMutation(
    $name: String!
    $email: String!
    $password: String!
  ) {
    RegisterAuthMutation(
      input: { name: $name, email: $email, password: $password }
    ) {
      auth {
        user {
          name
        }
        token
      }
    }
  }
`;

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .min(6)
    .required(),
  password_confirmation: Yup.string()
    .min(6)
    .required(),
});

export default function SignUp() {
  const dispatch = useDispatch();

  const [registerUser] = useMutation(REGISTER, {
    onCompleted: ({ RegisterAuthMutation }) => {
      const { auth } = RegisterAuthMutation;

      history.goBack();
    },
    onError: err => {
      console.error(err);
    },
  });

  function handleSubmit({ name, email, password }) {
    registerUser({
      variables: { name, email, password },
    });
  }

  return (
    <>
      <img src={logo} alt="ok" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Name" />
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          autoComplete="name"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Repeat the password"
          autoComplete="current-password"
        />
        <button type="submit">Create account</button>
        <Link to="/">Login</Link>
      </Form>
    </>
  );
}

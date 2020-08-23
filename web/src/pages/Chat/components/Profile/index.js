import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import history from '~/services/history';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { updateProfileSuccess } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import Button from '~/components/Button';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export const USER_UPDATE = gql`
  mutation UpdateUserMutation($file: String, $name: String) {
    UpdateUserMutation(input: { file: $file, name: $name }) {
      user {
        _id
        name
        email
        file {
          _id
          path
        }
      }
    }
  }
`;

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [updateProfile] = useMutation(USER_UPDATE, {
    onCompleted: ({ UpdateUserMutation }) => {
      dispatch(updateProfileSuccess(UpdateUserMutation.user));
    },
    onError: err => {
      console.error(err);
    },
  });

  function handleSubmit(data) {
    updateProfile({
      variables: {
        file: data.file || null,
        id: profile._id,
        name: data.name,
      },
    });
  }

  function handleSignOut() {
    dispatch(signOut());
    history.push('/');
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="file" />
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="Email address" />
        <hr />
        <Button type="submit">Update profile</Button>
      </Form>

      <Button type="button" onClick={handleSignOut}>
        Exit
      </Button>
    </Container>
  );
}

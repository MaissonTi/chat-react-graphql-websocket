import React, { useState, useRef } from 'react';
import { useField } from '@rocketseat/unform';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import userImg from '~/assests/user.png';
import { Container } from './styles';
import { useSelector } from 'react-redux';

export const FILE_MUTATION = gql`
  mutation FileMutation($file: Upload!) {
    FileMutation(input: { file: $file }) {
      file {
        _id
        path
      }
    }
  }
`;

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const profile = useSelector(state => state.user.profile);

  const ref = useRef();

  const [fileUpload] = useMutation(FILE_MUTATION, {
    onCompleted: ({ FileMutation }) => {
      const { _id, path } = FileMutation.file;

      //const url = path.replace('./', `${APP_SERVER}/`);

      setFile(_id);
      setPreview(path);

      registerField({
        name: 'file',
        ref: ref.current,
        path: 'dataset.file',
      });
    },
    onError: e => {
      console.log(e);
    },
  });

  async function handleChange(e) {
    const file = e.target.files[0];

    fileUpload({
      variables: {
        file: file,
      },
    });
  }

  return (
    <Container>
      <label htmlFor="file">
        <img
          src={
            preview || (profile && profile.file && profile.file.path) || userImg
          }
          alt="Foto de perfil"
        />
        <input
          type="file"
          id="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

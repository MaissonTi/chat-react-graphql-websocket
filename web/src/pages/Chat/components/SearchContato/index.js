import React, { useState } from 'react';
import { MdClose, MdSettings, MdSearch } from 'react-icons/all';
import Sidebar from '../Sidebar';
import { useSelector } from 'react-redux';

import Profile from '../Profile';

import { Container, Avatar, DivUser, DivOptions, DivSettings } from './styles';
import userImg from '~/assests/user.png';

export default function SearchContato() {
  const [open, setOpen] = useState(false);
  const { profile } = useSelector(state => state.user);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Sidebar open={open}>
        <Profile />
      </Sidebar>
      <Container>
        <DivUser>
          <Avatar
            src={(profile && profile.file && profile.file.path) || userImg}
          />
          {profile && profile.name}
        </DivUser>
        <DivOptions>
          {!open && <MdSearch size={25} />}
          <DivSettings onClick={handleClick}>
            {open ? <MdClose size={25} /> : <MdSettings size={25} />}
          </DivSettings>
        </DivOptions>
      </Container>
    </>
  );
}

import React from 'react';

import { Container } from './styles';

export default function Sidebar({ open, children }) {
  return <Container open={open}>{children}</Container>;
}

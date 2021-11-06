import React from 'react';
import styled from 'styled-components';
import { MAIN_PALETTE } from '../../../styles/theme';

const Button = styled.button`
  background-color: ${MAIN_PALETTE.MAIN_BLUE};
  font-size: 1rem;
  border-radius: 10px;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const SignInBtn = () => {
  return (
    <Button>Sign In</Button>  
  );
};

export default SignInBtn;
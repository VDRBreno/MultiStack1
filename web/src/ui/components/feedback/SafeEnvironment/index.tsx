import React from 'react';

import { Container as UIContainer } from '@material-ui/core';

import { Container } from './styles';

const SafeEnvironment = () => {
  return (
    <Container>
      <UIContainer>
        Ambiente Seguro <i className='twf-lock' />
      </UIContainer>
    </Container>
  );
};

export default SafeEnvironment;
import React from 'react';

import { Container, Title, SubTitle } from './styles';

interface IProps {
  title: string;
  subTitle: string;
}

const PageTitle: React.FC<IProps> = ({ title, subTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default PageTitle;
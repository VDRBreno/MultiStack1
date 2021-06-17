import React from 'react';

import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitleStyled
} from './styles';

export interface IPageTitle {
  title: string,
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<IPageTitle> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
    </PageTitleContainer>
  );
}

export default PageTitle;
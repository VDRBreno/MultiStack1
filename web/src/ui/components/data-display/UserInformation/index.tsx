import React from 'react';

import {
  Container, UserName, UserDescription,
  AvatarStyled, RatingStyled
} from './styles';

interface IUserInformation {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<IUserInformation> = ({ picture, name, rating, description }) => {
  return (
    <Container>
      <AvatarStyled src={picture} alt='userImage'>
        {name[0]}
      </AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </Container>
  );
}

export default UserInformation;
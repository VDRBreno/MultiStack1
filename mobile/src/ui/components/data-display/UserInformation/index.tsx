import React from 'react';

import { Avatar } from 'react-native-paper';

import { 
  UserInformationContainer, 
  InformationContainer,
  UserName,
  UserDescription,
  RatingStyled
} from './style';

export interface IUserInformation {
  picture: string;
  name: string;
  rating: number;
  description?: string;
  darker?: boolean;
}

const UserInformation: React.FC<IUserInformation> = ({ picture, name, rating, description, darker }) => {
  return (
    <UserInformationContainer darker={Boolean(darker)}>
      <Avatar.Image source={{ uri: picture }} />

      <InformationContainer>

        <UserName>{name}</UserName>
        <RatingStyled defaultRating={rating} />
        <UserDescription>{description}</UserDescription>

      </InformationContainer>
    </UserInformationContainer>
  );
}

export default UserInformation;
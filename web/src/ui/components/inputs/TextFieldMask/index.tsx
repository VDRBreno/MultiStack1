import React from 'react';

import InputMask from 'react-input-mask';
import { OutlinedTextFieldProps } from '@material-ui/core';

import TextFieldStyled  from '../TextField';

export interface ITextFieldMask extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<ITextFieldMask> = ({ mask, value, onChange, ...props }) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextFieldStyled {...props} />;
      }}
    </InputMask>
  );
}

export default TextFieldMask;
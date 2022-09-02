import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  cursor: pointer;
  min-width: 158px;
  min-height: 50px;
  font-family: 'Proxima Nova';
  font-weight: 700;
  font-size: 16px;
  line-height: 50px;
  :hover {
    box-shadow: 2px 4px 12px rgba(60, 60, 60, 0.5);
  }

  background-color: ${props => (props.type == 'default' ? '#FFFFFF' : '#FFCA52')};
  color: ${props => (props.type == 'default' ? '#3C3C3C' : '#FFFFFF')};
  box-shadow: 2px 4px 12px rgba(60, 60, 60, 0.12);
  border-radius: 30px;
`;

export default function CustomButton({ type, text }) {
  return (
    <ButtonContainer type={type}>
      {text}
    </ButtonContainer>
  );
}

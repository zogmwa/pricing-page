import React from 'react';
import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 46px;
  height: 26px;
  border-radius: 15px;
  background: #E2EAF0;;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    background: #0D88E3;
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  margin: 0;
  &:checked + ${CheckBoxLabel} {
    background: #B6D7F1;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 26px;
      height: 26px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export default function CustomSwitch() {
  return (
    <CheckBoxWrapper>
      <CheckBox id="checkbox" type="checkbox" />
      <CheckBoxLabel htmlFor="checkbox" />
    </CheckBoxWrapper>
  );
}

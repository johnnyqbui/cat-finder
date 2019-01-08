import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  color: rgba(51, 51, 51, 0.8);
  cursor: pointer;
  display: block;
  padding: 16px 0px;
  border-bottom: 1px solid #CCC;
  &:hover {
    background-color: #CCC
  }

  &:last-child {
    border-bottom: 0;
  }
`;

export default function Item(props) {
  return (
    <Li onClick={() => props.onClick(props.item)}>{props.item}</Li>
  );
}


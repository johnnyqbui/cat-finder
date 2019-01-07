import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
  box-sizing: border-box;
  color: rgba(51, 51, 51, 0.8);
  cursor: pointer;
  display: block;
  padding: 8px 10px;
`;

export default function Item(props) {
  return (
    <Li onClick={() => props.onClick()}>{props.item}</Li>
  );
}


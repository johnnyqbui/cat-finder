import styled from 'styled-components';

export default styled.ul`
  margin: 0;
  padding: 0;
  height: ${props => props.active ? '300px' : '0'};
  overflow: scroll;
  background-color: #FFF;
  border: ${props => props.active ? '1px solid #ccc' : '0'};
  border-radius: 2px;
  box-sizing: border-box;
  color: #333;
  cursor: default;
  outline: none;
  transition: all 200ms ease;
`;
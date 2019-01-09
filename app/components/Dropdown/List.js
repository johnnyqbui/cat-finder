import styled from 'styled-components';

export default styled.ul`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  height: ${props => props.active ? 'auto' : '0'};
  max-height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #FFF;
  border: ${props => props.active ? '1px solid #ccc' : '0'};
  border-radius: 2px;
  box-sizing: border-box;
  color: #777;
  cursor: default;
  outline: none;
  transition: all 200ms ease;
`;
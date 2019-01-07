import styled from 'styled-components';

export default styled.ul`
  height: ${props => props.active ? 'auto' : '50px'};
  position: relative;
  overflow: hidden;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 2px;
  box-sizing: border-box;
  color: #333;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 10px;
  transition: all 200ms ease;
`;
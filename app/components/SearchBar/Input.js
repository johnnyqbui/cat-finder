import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  display: block;
  color: #777;
  cursor: ${props => props.focused ? 'auto' : 'pointer'};
  padding: 16px;
  background-color: #FFF;
  border: 1px solid #CCC;
  border-radius: 2px;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif
`;

export default Input
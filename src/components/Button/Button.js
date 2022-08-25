/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 16px;
  height: 50px;
  color: #ffffff;
  background: linear-gradient(to bottom right, #000000, #555555);
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

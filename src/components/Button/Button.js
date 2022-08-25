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
  font-size: ${(props) => props.size || '16px'};
  height: ${(props) => props.height || '50px'};
  color: ${(props) => props.color || '#ffffff'};
  background: ${(props) => props.background || 'linear-gradient(to bottom right, #000000, #555555)'};
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

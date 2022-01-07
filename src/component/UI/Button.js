import styled from "styled-components"

const Button = styled.button`
  background: ${props => props.cancel ? "black" : "transparent"};
  border-radius: 3px;
  border: 2px solid #eee;
  color: ${props => props.cancel ? "white" : "#737373"};
  margin: 0 1em;
  padding: 0.25em 1em;
  
  &:focus {
  outline: none
  }
  
  &:hover,
  &:active {
    background: #eee;
  }
`

export default Button;
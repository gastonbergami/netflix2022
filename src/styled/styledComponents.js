import styled from "styled-components";
import { InputBase } from "@material-ui/core";

export const NetfInput = styled(InputBase)`
  z-index: 30;
  background: #fff;
  padding: 25.5px;
  height: 30px;
  boder-radius: 5px;
  border: none;
`;
const handleWidth = (wide) => {
  switch (wide) {
    case "fullWidth":
      return "100";
    case "medium":
      return "260px";
    default:
      return "160px";
  }
};
export const NetfButton = styled.button`
  z-index: 15;
  background-color: ${(props) =>
    props.color === "gray" ? "lightgray" : "red"};
  color: #fff;
  boder-radius: ${({ radius }) => (radius ? "5px" : null)};
  text-transform: inherit;
  padding: 15px;
  font-size: 1.1rem;
  outline: none;
  cursor: pointer;
  width: ${({ wide }) => handleWidth(wide)};
`;

import React from "react";
import styled from "styled-components";

const Editable = styled.input.attrs(() => ({
  type: "text",
}))`
  color: #505050;
  font-size: 16px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  height: 40px;
  background-color: #fafafa;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const EditableField = () => <Editable />;

export default EditableField;

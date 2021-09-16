import React from "react";
import styled from "styled-components";

const Editable = styled.input.attrs(() => ({
  type: "text",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 1px solid ${(props) => props.theme.colors.grey};
`;

const EditableField = () => <Editable />;

export default EditableField;

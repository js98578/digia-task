import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const EditableField = ({ value, onChange, placeholder }) => (
  <Editable value={value} onChange={onChange} placeholder={placeholder} />
);

EditableField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default EditableField;

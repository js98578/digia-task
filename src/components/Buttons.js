import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ButtonContainerBase } from "./baseComponents";

const AddNewButtonContainer = styled(ButtonContainerBase)`
  background-color: #ededed;
  color: #767676;
`;

export const AddNewButton = ({ onClick }) => (
  <AddNewButtonContainer onClick={onClick}>Add new</AddNewButtonContainer>
);

AddNewButton.propTypes = {
  onClick: PropTypes.func,
};

const SaveButtonContainer = styled(ButtonContainerBase)`
  background-color: #0077ff;
  color: white;
`;

export const SaveButton = ({ onClick }) => (
  <SaveButtonContainer onClick={onClick}>Save</SaveButtonContainer>
);

SaveButton.propTypes = {
  onClick: PropTypes.func,
};

const CancelButtonContainer = styled(ButtonContainerBase)`
  background-color: #ededed;
  color: #0077ff;
  margin-right: 10px;
`;

export const CancelButton = ({ onClick }) => (
  <CancelButtonContainer onClick={onClick}>Cancel</CancelButtonContainer>
);

CancelButton.propTypes = {
  onClick: PropTypes.func,
};

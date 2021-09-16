import React from "react";
import styled from "styled-components";

const NewParticipantContainer = styled.div`
  padding: ${(props) => props.theme.spacing.editableLinePadding};
  background-color: ${(props) => props.theme.colors.participantsContent};
`;

const NewParticipant = () => (
  <NewParticipantContainer></NewParticipantContainer>
);

export default NewParticipant;

import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as EditIcon } from "../icons/edit_black_24dp.svg";
import { ReactComponent as DeleteIcon } from "../icons/delete_black_24dp.svg";

const StyledEditIcon = styled(EditIcon)`
  color: ${(props) => props.theme.colors.listItemIconColor};
  height: ${(props) => props.theme.spacing.listItemIconSize}px;
  width: ${(props) => props.theme.spacing.listItemIconSize}px;
  cursor: pointer;
  margin-right: 30px;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  color: ${(props) => props.theme.colors.listItemIconColor};
  height: ${(props) => props.theme.spacing.listItemIconSize}px;
  width: ${(props) => props.theme.spacing.listItemIconSize}px;
  cursor: pointer;
`;

const ParticipantListContainer = styled.div`
  background-color: white;
`;

const InfoText = styled.div`
  color: #505050;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

const ParticipantListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid ${(props) => props.theme.colors.grey};
`;

const ParticipantListItemInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
`;

const ParticipantListItemIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 24px;
`;

const ParticipantListItemButtonsContainer = styled.div``;

const ParticipantListItem = ({ participant }) => {
  const [edit] = useState(false);
  console.log(participant);
  if (edit) {
    return (
      <ParticipantListItemContainer>
        <ParticipantListItemInfoContainer></ParticipantListItemInfoContainer>
        <ParticipantListItemButtonsContainer></ParticipantListItemButtonsContainer>
      </ParticipantListItemContainer>
    );
  }
  return (
    <ParticipantListItemContainer>
      <ParticipantListItemInfoContainer>
        <InfoText>{participant.name}</InfoText>
        <InfoText>{participant.email}</InfoText>
        <InfoText>{participant.phone}</InfoText>
      </ParticipantListItemInfoContainer>
      <ParticipantListItemIconsContainer>
        <StyledEditIcon />
        <StyledDeleteIcon />
      </ParticipantListItemIconsContainer>
    </ParticipantListItemContainer>
  );
};

const ParticipantList = ({ participants }) => (
  <ParticipantListContainer>
    {participants.map((participant) => (
      <ParticipantListItem key={participant.id} participant={participant} />
    ))}
  </ParticipantListContainer>
);

ParticipantList.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.object),
};

ParticipantListItem.propTypes = {
  participant: PropTypes.object,
};

export default ParticipantList;

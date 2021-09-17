import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as EditIcon } from "../icons/edit_black_24dp.svg";
import { ReactComponent as DeleteIcon } from "../icons/delete_black_24dp.svg";
import { CancelButton, SaveButton } from "./Buttons";
import EditableField from "./EditableField";

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
  margin-bottom: 50px;
`;

const InfoText = styled.div`
  color: #505050;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

export const ParticipantListItemContainer = styled.div`
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

export const ParticipantListItemEditContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const ParticipantListItemIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 24px;
`;

const FieldContainerBase = styled.div`
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari, Chrome */
  box-sizing: border-box; /* ie, opera */
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) => props.edit && "padding-right: 16px;"}
`;

export const NameFieldContainer = styled(FieldContainerBase)`
  width: ${(props) => props.theme.spacing.nameWidth}px;
`;

export const EmailFieldContainer = styled(FieldContainerBase)`
  width: ${(props) => props.theme.spacing.emailWidth}px;
`;

export const PhoneFieldContainer = styled(FieldContainerBase)`
  width: ${(props) => props.theme.spacing.phoneWidth}px;
`;

const ParticipantListItemEdit = ({ participant, onSave, cancelEdit }) => {
  const [participantEditState, setParticipantEditState] = useState(participant);

  const onEditChange = (value, field) => {
    setParticipantEditState((prevState) => ({ ...prevState, [field]: value }));
  };

  return (
    <ParticipantListItemContainer>
      <ParticipantListItemEditContainer>
        <NameFieldContainer edit>
          <EditableField
            value={participantEditState.name}
            onChange={(event) => onEditChange(event.target.value, "name")}
          />
        </NameFieldContainer>
        <EmailFieldContainer edit>
          <EditableField
            value={participantEditState.email}
            onChange={(event) => onEditChange(event.target.value, "email")}
          />
        </EmailFieldContainer>
        <PhoneFieldContainer edit>
          <EditableField
            value={participantEditState.phone}
            onChange={(event) => onEditChange(event.target.value, "phone")}
          />
        </PhoneFieldContainer>
      </ParticipantListItemEditContainer>
      <ParticipantListItemIconsContainer>
        <CancelButton onClick={() => cancelEdit()} />
        <SaveButton
          onClick={() => {
            onSave(participantEditState);
            cancelEdit();
          }}
        />
      </ParticipantListItemIconsContainer>
    </ParticipantListItemContainer>
  );
};

const ParticipantListItem = ({ participant, onSave, remove }) => {
  const [edit, setEdit] = useState(false);

  if (edit) {
    return (
      <ParticipantListItemEdit
        participant={participant}
        onSave={onSave}
        cancelEdit={() => setEdit(!edit)}
      />
    );
  }
  return (
    <ParticipantListItemContainer>
      <ParticipantListItemInfoContainer>
        <NameFieldContainer>
          <InfoText>{participant.name}</InfoText>
        </NameFieldContainer>
        <EmailFieldContainer>
          <InfoText>{participant.email}</InfoText>
        </EmailFieldContainer>
        <PhoneFieldContainer>
          <InfoText>{participant.phone}</InfoText>
        </PhoneFieldContainer>
      </ParticipantListItemInfoContainer>
      <ParticipantListItemIconsContainer>
        <StyledEditIcon onClick={() => setEdit(!edit)} />
        <StyledDeleteIcon onClick={() => remove(participant.id)} />
      </ParticipantListItemIconsContainer>
    </ParticipantListItemContainer>
  );
};

const ColumnNamesContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: 48px;
  align-items: center;
  padding-left: 24px;
`;

const ColumnName = styled.div`
  color: #757575;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  cursor: pointer;
`;

const SortingIndicator = styled.div`
  margin-left: 5px;
`;

const SortingIndicatorAscending = () => <SortingIndicator>↓</SortingIndicator>;
const SortingIndicatorDescending = () => <SortingIndicator>↑</SortingIndicator>;

const COLUMN_NAMES = {
  name: "Name",
  email: "Email",
  phone: "Phone",
};

const ColumnNameComponent = ({ sort, sortedBy, field }) => (
  <>
    <ColumnName onClick={() => sort(field)}>{COLUMN_NAMES[field]}</ColumnName>
    {sortedBy.sortedByField === field && sortedBy.ascending && (
      <SortingIndicatorAscending />
    )}
    {sortedBy.sortedByField === field && !sortedBy.ascending && (
      <SortingIndicatorDescending />
    )}
  </>
);

const ParticipantList = ({ participants, onSave, remove, sort, sortedBy }) => (
  <ParticipantListContainer>
    <ColumnNamesContainer>
      <NameFieldContainer>
        <ColumnNameComponent sort={sort} sortedBy={sortedBy} field={"name"} />
      </NameFieldContainer>
      <EmailFieldContainer>
        <ColumnNameComponent sort={sort} sortedBy={sortedBy} field={"email"} />
      </EmailFieldContainer>
      <PhoneFieldContainer>
        <ColumnNameComponent sort={sort} sortedBy={sortedBy} field={"phone"} />
      </PhoneFieldContainer>
    </ColumnNamesContainer>
    {participants.map((participant) => (
      <ParticipantListItem
        key={participant.id}
        participant={participant}
        onSave={onSave}
        remove={remove}
      />
    ))}
  </ParticipantListContainer>
);

ParticipantList.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.object),
  onSave: PropTypes.func,
  remove: PropTypes.func,
  sort: PropTypes.func,
  sortedBy: PropTypes.object,
};

ParticipantListItem.propTypes = {
  participant: PropTypes.object,
  onSave: PropTypes.func,
  remove: PropTypes.func,
};

ParticipantListItemEdit.propTypes = {
  onSave: PropTypes.func,
  participant: PropTypes.object,
  cancelEdit: PropTypes.func,
};

ColumnNameComponent.propTypes = {
  field: PropTypes.string,
  sort: PropTypes.func,
  sortedBy: PropTypes.object,
};

export default ParticipantList;

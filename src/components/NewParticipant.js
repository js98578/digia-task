import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AddNewButton } from "./Buttons";
import EditableField from "./EditableField";
import {
  EmailFieldContainer,
  NameFieldContainer,
  ParticipantListItemContainer,
  ParticipantListItemEditContainer,
  ParticipantListItemIconsContainer,
  PhoneFieldContainer,
} from "./ParticipantList";

const Container = styled.div`
  margin-bottom: 10px;
  background-color: white;
  margin-top: 40px;
`;

const emptyParticipant = {
  id: "",
  name: "",
  email: "",
  phone: "",
};

const NewParticipant = ({ addNewParticipant }) => {
  const [newParticipant, setNewParticipant] = useState(emptyParticipant);

  const clear = () => {
    setNewParticipant(emptyParticipant);
  };

  return (
    <Container>
      <ParticipantListItemContainer>
        <ParticipantListItemEditContainer>
          <NameFieldContainer edit>
            <EditableField
              value={newParticipant.name}
              onChange={(event) =>
                setNewParticipant({
                  ...newParticipant,
                  name: event.target.value,
                })
              }
              placeholder="Full name"
            />
          </NameFieldContainer>
          <EmailFieldContainer edit>
            <EditableField
              value={newParticipant.email}
              onChange={(event) =>
                setNewParticipant({
                  ...newParticipant,
                  email: event.target.value,
                })
              }
              placeholder="E-mail address"
            />
          </EmailFieldContainer>
          <PhoneFieldContainer edit>
            <EditableField
              value={newParticipant.phone}
              onChange={(event) =>
                setNewParticipant({
                  ...newParticipant,
                  phone: event.target.value,
                })
              }
              placeholder="Phone number"
            />
          </PhoneFieldContainer>
        </ParticipantListItemEditContainer>
        <ParticipantListItemIconsContainer>
          <AddNewButton
            onClick={() => {
              addNewParticipant(newParticipant);
              clear();
            }}
          />
        </ParticipantListItemIconsContainer>
      </ParticipantListItemContainer>
    </Container>
  );
};

NewParticipant.propTypes = {
  addNewParticipant: PropTypes.func,
};

export default NewParticipant;

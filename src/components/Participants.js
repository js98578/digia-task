import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import validator from "validator";
import { TitleBase } from "./baseComponents";
import ParticipantList from "./ParticipantList";
import { getRandomEmail, getRandomPhoneNumber } from "../util/helperFunctions";
import NewParticipant from "./NewParticipant";

const nameGeneratorConfig = {
  dictionaries: [names],
};

const Container = styled.div`
  width: ${(props) => props.theme.spacing.bodyWidth}px;
  margin-top: 64px;
`;

const Title = styled(TitleBase)`
  color: ${(props) => props.theme.colors.darkGrey};
`;

const Participants = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const array = new Array(20);
    const participantsArray = array.fill(undefined).map(() => ({
      id: uuidv4(),
      name: `${uniqueNamesGenerator(
        nameGeneratorConfig
      )} ${uniqueNamesGenerator(nameGeneratorConfig)}`,
      email: getRandomEmail(),
      phone: getRandomPhoneNumber(),
    }));
    setParticipants(participantsArray);
  }, []);

  const validateParticipant = (participant) => {
    const isEmail = validator.isEmail(participant.email.toString());
    const isNumber = validator.isInt(participant.phone.toString());

    if (isEmail && isNumber) {
      return true;
    }
    // eslint-disable-next-line no-alert
    alert("Problem on validation");
    return false;
  };

  const onSave = (newParticipant) => {
    if (!validateParticipant(newParticipant)) {
      return;
    }
    setParticipants((prevState) => {
      const indexOfParticipant = prevState.findIndex(
        (participant) => participant.id === newParticipant.id
      );
      const newListOfParticipants = prevState.map((participant, index) => {
        if (index === indexOfParticipant) {
          return newParticipant;
        }
        return participant;
      });
      return newListOfParticipants;
    });
  };

  const removeParticipant = (id) => {
    setParticipants((prevState) => {
      const newListOfParticipants = prevState.filter((x) => x.id !== id);
      return newListOfParticipants;
    });
  };

  const addNewParticipant = (participant) => {
    // eslint-disable-next-line no-param-reassign
    participant.id = uuidv4();
    if (validateParticipant(participant)) {
      setParticipants((prevState) => [...prevState, participant]);
    }
  };

  const sort = (column) => {
    console.log(column);
  };

  return (
    <Container>
      <Title>List of participants</Title>
      <NewParticipant addNewParticipant={addNewParticipant} />
      <ParticipantList
        participants={participants}
        onSave={onSave}
        remove={removeParticipant}
        sort={sort}
      />
    </Container>
  );
};

export default Participants;

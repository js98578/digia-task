import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import { TitleBase } from "./baseComponents";
import NewParticipant from "./NewParticipant";
import ParticipantList from "./ParticipantList";
import { getRandomEmail, getRandomPhoneNumber } from "../util/helperFunctions";

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

  const onSave = (newParticipant) => {
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

  return (
    <Container>
      <Title>List of participants</Title>
      <NewParticipant />
      <ParticipantList
        participants={participants}
        onSave={onSave}
        remove={removeParticipant}
      />
    </Container>
  );
};

export default Participants;

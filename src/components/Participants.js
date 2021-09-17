import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import validator from "validator";
import sortArray from "sort-array";
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
  const [sortedBy, setSortedBy] = useState({
    sortedByField: "name",
    ascending: true,
  });

  const onValidationError = () => {
    // eslint-disable-next-line no-alert
    alert("Problem on validation");
  };

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
    sortArray(participantsArray, {
      by: "name",
      order: "asc",
    });
    setSortedBy({ sortedByField: "name", ascending: true });
    setParticipants(participantsArray);
  }, []);

  const validateParticipant = (participant) => {
    const isEmail = validator.isEmail(participant.email.toString());
    const isNumber = validator.isInt(participant.phone.toString());

    if (isEmail && isNumber) {
      return true;
    }
    onValidationError();
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

  const sort = (column) => {
    const participantsCopy = JSON.parse(JSON.stringify(participants));
    let newOrder = "asc";

    if (sortedBy.sortedByField === column && sortedBy.ascending === true) {
      newOrder = "desc";
    }

    sortArray(participantsCopy, {
      by: column,
      order: newOrder,
    });
    setParticipants(participantsCopy);
    if (sortedBy.sortedByField === column) {
      setSortedBy({ sortedByField: column, ascending: !sortedBy.ascending });
      return;
    }
    setSortedBy({ sortedByField: column, ascending: true });
  };

  const addNewParticipant = (participant) => {
    if (!validateParticipant(participant)) {
      return;
    }
    const newParticipant = Object.assign(participant, { id: uuidv4() });
    const participantsCopy = JSON.parse(JSON.stringify(participants));
    participantsCopy.push(newParticipant);
    let order = "asc";
    if (sortedBy.ascending === false) {
      order = "desc";
    }
    sortArray(participantsCopy, {
      by: sortedBy.sortedByField,
      order,
    });
    setParticipants(participantsCopy);
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
        sortedBy={sortedBy}
      />
    </Container>
  );
};

export default Participants;

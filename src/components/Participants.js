import styled from "styled-components";
import { TitleBase } from "./baseComponents";

const Container = styled.div`
  width: ${(props) => props.theme.spacing.bodyWidth}px;;
  margin-top: 64px;
`;

const Title = styled(TitleBase)`
  color: ${(props) => props.theme.colors.darkGrey};
`;

const Participants = () => {
  return <Container><Title>List of participants</Title></Container>;
};

export default Participants;

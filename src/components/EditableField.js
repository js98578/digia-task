import styled from "styled-components";

const Editable = styled.input.attrs(props => ({
    type: "text",
  }))`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

const Participants = () => {
  return <Editable />;
};

export default Participants;

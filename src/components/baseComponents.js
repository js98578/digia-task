import styled from "styled-components";

const TitleBase = styled.div`
  line-height: ${(props) => props.theme.spacing.titleLineHeight}px;
  font-size: ${(props) => props.theme.spacing.titleFontSize}px;
`;

export default TitleBase;

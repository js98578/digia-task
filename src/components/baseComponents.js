import styled from "styled-components";

export const TitleBase = styled.div`
  line-height: ${(props) => props.theme.spacing.titleLineHeight}px;
  font-size: ${(props) => props.theme.spacing.titleFontSize}px;
`;

export const ButtonContainerBase = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

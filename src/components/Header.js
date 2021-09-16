import React from "react";
import styled from "styled-components";
import TitleBase from "./baseComponents";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${(props) => props.theme.spacing.headerPadding}px;
  background-color: ${(props) => props.theme.colors.headerContainer};
`;

const HeaderIcon = styled.div`
  width: ${(props) => props.theme.spacing.headerPadding}px;
  height: ${(props) => props.theme.spacing.headerPadding}px;
  background-color: ${(props) => props.theme.colors.headerContent};
`;

const HeaderTitle = styled(TitleBase)`
  color: ${(props) => props.theme.colors.headerContent};
  margin-left: ${(props) => props.theme.spacing.headerContentSpacing}px;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderIcon />
    <HeaderTitle>Software</HeaderTitle>
  </HeaderContainer>
);

export default Header;

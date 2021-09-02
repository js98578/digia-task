import styled from "styled-components";
import { headerContainer, headerContent } from "../styles/colors";
import { headerPadding } from "../styles/spacing";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${headerPadding}px;
  background-color: ${headerContainer};
`;

const HeaderIcon = styled.div`
  width: ${headerPadding}px;
  height: ${headerPadding}px;
  background-color: ${headerContent};
`;

const HeaderTitle = styled.div`
  line-height: 32px;
  font-size: 26px;
  color: ${headerContent};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderIcon />
      <HeaderTitle>Software</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

import styled, { css } from "styled-components";
import "../App.css";
import logo from "../assets/Logo.png";
const HeaderComponent = ({ children }) => {
  return (
    <Header className="header">
      <img src={logo} alt="" />
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 375px;
  margin-left: 15%;

  @media (min-width: 800px) and (max-width: 1024px) {
    width: 55%;
    margin-left: 0;
  }

  @media (min-width: 1080px) and (max-width: 1920px) {
    width: 75%;
    margin-left: 0;
    margin-top: 1%;
    height: 15vh;
  }
`;

export default HeaderComponent;

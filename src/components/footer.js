import styled from "styled-components";

const FooterComponent = () => {
  return (
    <Footer>
      <p>Conctact Us</p>
    </Footer>
  );
};

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 80px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  background-image: linear-gradient(to right, #fe4e57, #ff2572, #ff0095);
  box-shadow: 0px -5px 5px -4px #D3D3D3;

  @media (min-width: 1080px) and (max-width: 1920px) {
    margin-top: 0;
    font-size: 80%;
    height: 80px;
    font-size: 1.2rem;
  }
`;

export default FooterComponent;

import styled from "styled-components";
import closeImg from "../../assets/cross.png";

const ToastMsg = ({ close, setClose }) => {
  return (
    <Container>
      <p>Obrigado por se cadastrar na nossa lista de espera!</p>
      <CloseImg onClick={() => setClose(!close)} src={closeImg} alt="" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 65%;
  height: 75px;
  background-color: #4bb543;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  color: #f9f9f9;
  text-align: start;
  padding-left: 15px;
  margin-bottom: 20px;
  font-size: 1rem;

  @media (min-width: 800px) and (max-width: 1920px) {
    width: 255px;
  }


`;

const CloseImg = styled.img`
  width: 25px;
  height: 25px;
  margin: 3px 3px;
  cursor: pointer;
`;

export default ToastMsg;

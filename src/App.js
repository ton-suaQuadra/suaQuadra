import "./App.css";
import { useState } from "react";
import propaganda from "./assets/propaganda.svg";
import garantia from "./assets/badge.png";
import economia from "./assets/settings.png";
import facilidade from "./assets/payment-method.png";
import styled from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
import ToastMsg from "./components/toasts/toastMsg";
import { contactPost } from "./services/contatoService";

function App() {
  const [contato, setContato] = useState({});
  const [showMsg, setShowMsg] = useState(false);

  const handleChande = (event) => {
    const { value, name } = event.target;
    setContato({
      ...contato,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    await contactPost(contato);
    setContato({});
    setShowMsg(true);
  };

  return (
    <div className="App">
      <Header />
      <Hero>
        <Title>quia dolor sit amet,</Title>
        <Slogan>Neque porro quisquam est qui dolorem ipsum</Slogan>
        {showMsg ? (<ToastMsg close={showMsg} setClose={setShowMsg} />) : ""}
        <Cadastro>
          <Input
            type="text"
            name="contato"
            value={contato.contato || ""}
            placeholder="Digite o seu melhor email:"
            onChange={handleChande}
          />
            <Btn onClick={handleSubmit}>Enviar</Btn>
        </Cadastro>
      </Hero>
      <Propaganda>
        <PropagandaImg className="propaganda" src={propaganda} alt="" />
      </Propaganda>
      <Section>
        <Info>
          <Icon src={garantia} alt="" />
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou
          </p>
        </Info>

        <Info>
          <Icon src={economia} alt="" />
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou
          </p>
        </Info>

        <Info>
          <Icon src={facilidade} alt="" />
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou
          </p>
        </Info>
      </Section>
      <Footer />
    </div>
  );
}

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  /* @media (min-width: 800px) and (max-width: 1024px) {
    padding-top: 30px;
  } */

  @media (min-width: 1080px) and (max-width: 1920px) {
    padding-top: 0;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;

  @media (min-width: 800px) and (max-width: 1024px) {
    font-size: 2.5rem; 
  }

  @media (min-width: 1080px) and (max-width: 1920px) {
    font-size: 2.5rem;
  }
`;

const Slogan = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  margin-bottom: 23px;

  @media (min-width: 800px) and (max-width: 1024px) {
    font-size: 1.7rem;
  }

  @media (min-width: 1080px) and (max-width: 1920px) {
    font-size: 1.7rem;
  }
`;

const Cadastro = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 56%;
  margin-right: 5px;
  height: 30px;
  border: none;
  border-radius: 6px;
  padding-left: 7px;

  @media (min-width: 800px) and (max-width: 1024px) {
    width: 390px;
    height: 50px;
    font-size: 1rem;
  }

  @media (min-width: 1080px) and (max-width: 1920px) {
    width: 34%;
    height: 50px;
    font-size: 1.1rem;
  }
`;

const Btn = styled.button`
  width: 15%;
  height: 30px;
  border: none;
  border-radius: 6px;
  background-color: #07519e;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  @media (min-width: 800px) and (max-width: 1024px) {
    width: 121px;
    height: 50px;
    font-size: 18px;
  }

  @media (min-width: 1080px) and (max-width: 1920px) {
    width: 7%;
    font-size: 1.2rem;
    height: 50px;
  }
`;

const Propaganda = styled.div`
  width: 351px;
  height: 351px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) and (max-width: 1024px) {
    width: 70%;
    height: 70%;
  }

  @media (min-width: 1080px) and (max-width: 1920px) {
    width: 600px;
    height: 600px;
  }
`;

const PropagandaImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 797px;
  width: 298px;
  text-align: center;
  font-size: 1.2rem;

  @media (min-width: 800px) and (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    font-size: 1.3rem;
  }

  @media (min-width: 1080px) and (max-width: 1920px) {
    width: 75%;
    height: 350px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Info = styled.div`
  margin-top: 30px;
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&display=swap");
  font-family: "Oswald", sans-serif;

  @media (min-width: 800px) and (max-width: 1024px) {
    width: 280px;
  }

  @media (min-width: 1080px) and (max-width: 1920px) {
    width: 280px;
    margin-top: 0;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export default App;

import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 1400px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 20px;
  flex: 2;
`;
const Right = styled.div`
  position: relative;
  flex: 3;
`;
const Title = styled.h1`
  font-size: 74px;
  color: black;
`;
const What = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
`;
const Desc = styled.p`
  font-size: 24px;
  color: black;
`;
const Line = styled.img`
  height: 5px;
`;
const Img = styled.img`
  height: 600px;
  width: 800px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate {
    to {
      transform: translateY(25px);
    }
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: orange;
  color: white;
  width: 100px;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
`;
const Sub = styled.h2`
  color: orange;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <What>
            <Line src="./img/line.png" />
            <Sub> What we Do</Sub>
          </What>
          <Desc>
            we enjoy creating delightful,human-centred digital experiences
          </Desc>
          <Button>learn more</Button>
        </Left>
        <Right>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;

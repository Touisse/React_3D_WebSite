import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 1400px;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 20px;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 74px;
`;
const What = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;
const Line = styled.img`
  height: 5px;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #da4ea2;
  color: white;
  width: 120px;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
`;
const Sub = styled.h2`
  color: #da4ea2;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left></Left>
        <Right>
          <Title>Think outside the square space</Title>
          <What>
            <Line src="./img/line.png" />
            <Sub> What we Are</Sub>
          </What>
          <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc>
          <Button>see our works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;

import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: orange;
  -webkit-text-stroke: 1px orange;
  position: relative;
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 0px;
    color: white;
    white-space: nowrap;
    -webkit-text-stroke: 1px white;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;
const ListItem = styled.li`
  cursor: pointer;
  color: black;
`;
const Icon = styled.img`
  cursor: pointer;
  width: 20px;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo text="YTouisse">YTouisse</Logo>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

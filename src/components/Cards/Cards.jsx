import React from "react";
import styled from "styled-components";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return <h1>Loading...</h1>;
  }
  return (
    <Card>
      <Title>Confirmed Cases</Title>
      <Total>{confirmed.value}</Total>
    </Card>
  );
};

const Card = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 200px;
  height: 100px;
  background-color: ${({ theme }) => theme.cardPurple};
  border-radius: 5px;
  color: white;
  margin: 1rem;
`;
const Title = styled.h5``;
const Total = styled.h3`
  font-size: 32px;
`;

export default Cards;

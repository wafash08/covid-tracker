import styled from "styled-components";

const CardItem = ({ title, total }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardTotal>{total}</CardTotal>
    </Card>
  );
};

export default CardItem;

const Card = styled.button``;
const CardTitle = styled.h2``;
const CardTotal = styled.h4``;

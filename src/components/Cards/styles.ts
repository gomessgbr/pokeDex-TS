import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background: red;
  border: 1px solid;
`;

export const CardImg = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: "cover";
`;

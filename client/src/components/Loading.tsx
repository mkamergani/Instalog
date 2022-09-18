import React from "react";
import { Spinner } from "@chakra-ui/react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Loading() {
  return (
    <Container>
      <Spinner size="xl" />
    </Container>
  );
}

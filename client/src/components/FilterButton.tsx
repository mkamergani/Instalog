import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "./utilities/Buttons";
import FilterIcon from "../assets/icons/filter.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 5px;
`;

const FilterButton: FC = () => {
  return (
    <Button>
      <Container>
        <img src={FilterIcon} alt="Filter Icon" />
        <div>Filter</div>
      </Container>
    </Button>
  );
};

export default FilterButton;

import React, { FC, ReactElement, useState, useEffect } from "react";
import { LoadMore } from "../components/utilities/Buttons";

import {
  Title,
  MainContainer,
  TableContainer,
  TableHeader,
  SearchBar,
  HeaderContainer,
  HeaderLabel,
  RowsContainer,
} from "../components/utilities/HomePage";
import Row from "../components/Row";
import { EventSummary } from "../helpers/types";
import { useEvents } from "../helpers/dataQuery";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home: FC = (): ReactElement => {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [actorID, setActorID] = useState("");
  const [actionID, setActionID] = useState("");
  const [targetID, setTargetID] = useState("");
  const [shouldFetch, setShouldFetch] = useState(true);
  const { events, isLoading, isError } = useEvents(
    shouldFetch,
    page,
    search,
    actorID,
    actionID,
    targetID
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldFetch(true);
      setSearch(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  if (isError) return <Error />;
  if (isLoading) return <Loading />;
  return (
    <>
      <Title> InstaLog</Title>
      <MainContainer>
        <TableContainer>
          <TableHeader>
            <SearchBar
              placeholder="Search name, email or action..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <HeaderContainer>
              <HeaderLabel>actor</HeaderLabel>
              <HeaderLabel>action</HeaderLabel>
              <HeaderLabel>Date</HeaderLabel>
            </HeaderContainer>
          </TableHeader>
          <RowsContainer>
            {events.map((eventRow: EventSummary, index: number) => {
              return <Row key={index} eventRow={eventRow} />;
            })}
          </RowsContainer>
          <LoadMore onClick={() => setPage((previousPage) => previousPage + 1)}>
            Load More
          </LoadMore>
        </TableContainer>
      </MainContainer>
    </>
  );
};

export default Home;

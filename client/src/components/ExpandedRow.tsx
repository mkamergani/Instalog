import React, { FC } from "react";
import styled from "styled-components";
import { useEvent } from "../helpers/dataQuery";
import getReadableDate from "../helpers/date";
import Error from "./Error";
import Loading from "./Loading";
const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 290px;
`;
const DataContainer = styled.div`
  position: absolute;
  width: 85%;
  min-height: 290px;
  max-width: 970px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
const LoadingContainer = styled.div`
  position: absolute;
  width: 85%;
  min-height: 290px;
  max-width: 970px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
  color: #929292;
  margin-bottom: 15px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const Label = styled.div`
  width: 35%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #929292;
`;
const Value = styled.div`
  width: 60%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;
const ExpandedRow: FC<{ eventID: string }> = ({ eventID }) => {
  const { event, isLoading, isError } = useEvent(eventID);

  if (isError) return <Error />;
  if (isLoading) return <Loading />;
  return (
    <Container>
      <BottomContainer>bottom div</BottomContainer>
      {isLoading ? (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      ) : (
        <DataContainer>
          <Column>
            <Header>actor</Header>
            <Row>
              <Label>Name</Label>
              <Value>{event.actor.name}</Value>
            </Row>
            <Row>
              <Label>Email</Label>
              <Value>{event.actor.email}</Value>
            </Row>
            <Row>
              <Label>ID</Label>
              <Value>{event.actor_id}</Value>
            </Row>
          </Column>
          <Column>
            <Header>action</Header>
            <Row>
              <Label>Name</Label>
              <Value>{event.action.name}</Value>
            </Row>
            <Row>
              <Label>Object</Label>
              <Value>{event.action.object}</Value>
            </Row>
            <Row>
              <Label>ID</Label>
              <Value>{event.action_id}</Value>
            </Row>
          </Column>
          <Column>
            <Header>date</Header>
            <Row>
              <Label>Readable</Label>
              <Value>{getReadableDate(event.occurred_at)}</Value>
            </Row>
          </Column>
          <Column>
            <Header>Metadata</Header>
            <Row>
              <Label>Redirect</Label>
              <Value>{event.redirect}</Value>
            </Row>
            <Row>
              <Label>Description</Label>
              <Value>{event.description}</Value>
            </Row>
            <Row>
              <Label>x_request_id</Label>
              <Value>{event.x_request_id}</Value>
            </Row>
          </Column>
          <Column>
            <Header>target</Header>
            <Row>
              <Label>ID</Label>
              <Value>{event.target_id}</Value>
            </Row>
            <Row>
              <Label>Name</Label>
              <Value>{event.target_name}</Value>
            </Row>
          </Column>
        </DataContainer>
      )}
    </Container>
  );
};

export default ExpandedRow;

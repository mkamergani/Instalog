import React, { FC } from "react";
import styled from "styled-components";
import getReadableDate from "../helpers/date";
import { CSVLink } from "react-csv";
import { EventSummary } from "../helpers/types";
import { Button } from "./utilities/Buttons";
import ExportIcon from "../assets/icons/export.svg";
const headers = [
  { label: "Actor", key: "actor" },
  { label: "Action", key: "action" },
  { label: "Date", key: "date" },
];

const csvReport = {
  headers: headers,
  filename: "Events_Report.csv",
};
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
`;
const ExportButton: FC<{ data: EventSummary[] }> = ({ data }) => {
  const csvData = data.map((row) => {
    return {
      actor: row.actor.email,
      action: row.action.name,
      date: getReadableDate(row.occurred_at),
    };
  });
  return (
    <Button>
      <Container>
        <img src={ExportIcon} alt="Export Icon" />
        <CSVLink data={csvData} {...csvReport}>
          Export
        </CSVLink>
      </Container>
    </Button>
  );
};

export default ExportButton;

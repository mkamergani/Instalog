import React, { FC, ReactElement, useState, useEffect } from "react";
import Arrow from "../assets/icons/arrow.svg";
import { EventRow } from "../helpers/types";
import getReadableDate from "../helpers/date";
import {
  Container,
  LabelContainer,
  DateContainer,
  Label,
  ActorIcon,
  Expand,
} from "./utilities/Row";
import ExpandedRow from "./ExpandedRow";

const Row: FC<EventRow> = ({ eventRow }): ReactElement => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    //Should Refactor this
    const handleClickOutside = (e: any) => {
      if (e.path[1].tagName !== "BUTTON") {
        setIsExpanded(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <>
      {isExpanded ? (
        <ExpandedRow eventID={eventRow.id} />
      ) : (
        <Container>
          <LabelContainer>
            <ActorIcon>{eventRow.actor.email[0]}</ActorIcon>
            <Label>{eventRow.actor.email}</Label>
          </LabelContainer>
          <LabelContainer>
            <Label>{eventRow.action.name}</Label>
          </LabelContainer>
          <DateContainer>
            <Label>{getReadableDate(eventRow.occurred_at)}</Label>
            <Expand onClick={() => handleExpand()}>
              <img src={Arrow} alt="Arrow" />
            </Expand>
          </DateContainer>
        </Container>
      )}
    </>
  );
};

export default Row;

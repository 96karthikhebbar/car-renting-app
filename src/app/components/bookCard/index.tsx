//import React package
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../buttons";
import { Marginer } from "../marginer";
// import react-calendar as Calendar
import Calendar from "react-calendar";

//import css
import "react-calendar/dist/Calendar.css";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";


const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0px 1.3px 12px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-1
        pl-1
        md:pt-2
        md:pb-2
        md:pr-9
        md:pl-9

    `};

`;

const ItemsContainer = styled.div`
  ${tw`
        flex
        relative
        
    `};
`;

const Icon = styled.span`
  ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `};
`;

const SmallIcon = styled.span`
  ${tw`
        text-gray-700
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
        ml-0.5
    `};
`;

const Name = styled.span`
  ${tw`
        text-gray-500
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `};
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 4em;
  left: 0em;
`;
const DateCalendarLeft = styled(Calendar)`
  position: absolute;
  max-width: none;
  top: 4em;
  left: -6.5em;
`;

//create and export function BookCard
export function BookCard(): JSX.Element {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date());
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const toggleStartCalendar = () => {
    if (isReturnCalendarOpen) {
      setReturnCalendarOpen(false);
    }
    setIsStartCalendarOpen(!isStartCalendarOpen);
  };

  const toggleReturnCalendar = () => {
    if (isStartCalendarOpen) {
      setIsStartCalendarOpen(false);
    }
    setReturnCalendarOpen(!isReturnCalendarOpen);
  };

  return (
    <CardContainer>
      <ItemsContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>

        <Name onClick={toggleStartCalendar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar
            value={startDate}
            onChange={(date: any) => setStartDate(date) as any}
          />
        )}
      </ItemsContainer>
      <LineSeparator />
      <ItemsContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnCalendar}>Return Date</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendarLeft
            value={returnDate}
            onChange={(date: any) => setReturnDate(date) as any}
          />
        )}
      </ItemsContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
}

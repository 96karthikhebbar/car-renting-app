import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faCarSide, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

// create a Container, which is a wrapper for the component and has layout and css
const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    justify-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
  `};
`;

// css styling for the title
const Title = styled.h2`
  ${tw`
    text-3xl
    text-black
    font-extrabold
    text-center
    lg:text-3xl
    lg:font-bold
    lg:text-center
  `};
`;

// container to wrap around the steps
const StepsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    items-center
    justify-evenly
    mt-7
    lg:mt-16
  `};
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    w-64
    md:w-96
    transition-colors
    hover:text-red-500
    p-4
    /* h-full
    lg:w-1/3
    lg:h-1/3
    lg:mr-4
    lg:mb-4 */
  `};
`;

// css styling for the step
const Step = styled.div`
  box-shadow: 0px 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
   flex
   rounded-lg
   items-center
   /* justify-center */
   p-6
  `};
`;

//css for the Step Title
const StepTitle = styled.h4`
  ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `};
`;

//css styling for Step Description
const StepDescription = styled.p`
  ${tw`
        text-xs
        md:text-sm
        text-center
        w-10/12
        text-gray-600
        /* font-semibold
        mt-4 */
    `};
`;

//css styling for the Step Icon imported from the Fontawesome library
const StepIcon = styled.i`
  ${tw`
        text-red-500
        text-3xl
    `};
`;

// create and export BookingSteps function
export function BookingSteps() {
  return (
    <Container>
      <Title>Booking Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose a location</StepTitle>
          <StepDescription>
            find the nearest Yourcar Points and book your car.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pick Up the Best Date to rent a car For you.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDescription>
            Book your nice car with ease in one single click.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}

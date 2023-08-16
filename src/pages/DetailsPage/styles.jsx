import styled from "styled-components";

export const StyledDetailsPage = styled.main`
   padding: 5rem 3.5rem;
   background-color: ${({theme}) => theme.backgroundColor};

   @media screen and (min-width: 1080px) {
      padding: 5.1rem 4.95rem;
      flex-grow: 2;
   }
`
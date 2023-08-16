import styled from "styled-components";

export const StyledHome = styled.main`
   background-color: ${({theme}) => theme.backgroundColor};
   padding: 3rem 2rem 6rem;
   display: flex;
   flex-direction: column;

   @media screen and (min-width: 1080px) {
      padding: 3rem 5rem 4rem;

      .inputs {
         display: flex;
         justify-content: space-between;
         align-items: flex-start;
         margin-bottom: 2.75rem;
      }
   }
`
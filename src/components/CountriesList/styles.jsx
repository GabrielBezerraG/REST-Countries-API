import styled from "styled-components";

export const StyledCountries = styled.div`
   display: grid;
   grid-template-columns: minmax(300px, 525px);
   row-gap: 5rem;
   margin: 0 auto;

   h1 {
      padding: 4rem;
      text-align: center;
      font-size: 1.5rem;
      font-weight: 600;
   }

   @media screen and (min-width: 1080px) {
      margin: 0;
      grid-template-columns: repeat(auto-fill, var(--card-width));
      justify-content: space-between;
      column-gap: 1.5rem;
      row-gap: 4.65rem;

      h1 {
         grid-column: 1/-1;
      }
   }
`
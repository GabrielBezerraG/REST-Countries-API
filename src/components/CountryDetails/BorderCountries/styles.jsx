import styled from "styled-components";

export const StyledBorderCountries = styled.div`
   h2 {
      font-weight: 600;
      font-size: 2.05rem;
      margin-bottom: 2.45rem;
      width: max-content;
   }

   .buttons {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      row-gap: 1rem;
      column-gap: 1rem;
   }

   @media screen and (min-width: 1080px) {
      display: flex;
      align-items: center;
      column-gap: 1rem;

      h2 {
         font-size: 1.05rem;
         margin-bottom: 0;
         width: 150px;
         box-sizing: border-box;
      }

      .buttons {
         column-gap: 0.65rem;
         row-gap: 0.65rem;
      }
   }
`
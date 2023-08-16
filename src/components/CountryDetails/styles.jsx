import styled from "styled-components";

export const StyledCountryDetails = styled.section`
   display: flex;
   flex-direction: column;
   letter-spacing: -0.35px;
   font-size: 1.8rem;
   
   img {
      width: 100%;
      margin-bottom: 6rem;
   }

   h1 {
      font-size: 2.75rem;
      font-weight: 800;
      margin-bottom: 3.7rem;
   }

   ul {
      display: flex;
      flex-direction: column;
      row-gap: 2.2rem;
   }


   .bold_text {
      font-weight: 600;
      margin-right: 0.5rem;
   }

   .main_info {
      margin-bottom: 6.2rem;
   }

   .additional_info {
      margin-bottom: 5.75rem;
   }

   @media screen and (min-width: 1080px) {
      flex-direction: row;
      column-gap: 7.5rem;
      align-items: center;
      font-size: 1.025rem;

      img {
         margin-bottom: 0;
      }

      .image {
         display: flex;
         max-width: 560px;
         max-height: 400px;
         box-sizing: border-box;
         margin-bottom: 0;
      }

      .content {
         display: grid;
         grid-template: repeat(3, max-content) / 1fr 1fr;
         align-items: start;
         column-gap: 6.5rem;
      }

      h1 {
         grid-area: 1/1/2/3;
         font-size: 2rem;
         margin-bottom: 2.3rem;
      }

      ul {
         row-gap: 1rem;
      }

      .bold_text {
         margin-right: 0.25rem;
      }

      .main_info {
         grid-area: 2/1/3/2;
         margin-bottom: 4.65rem;
      }

      .additional_info {
         grid-area: 2/2/3/3;
         margin-bottom: 0;
      }

      .border_countries {
         grid-area: 3/1/4/3;
      }
   
   }
`
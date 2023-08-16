import styled from "styled-components";

export const StyledCountryButton = styled.div`
   button {
      background-color: ${({theme}) => theme.backgroundColorLighter};
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      box-shadow: ${({theme}) => theme.buttonShadow};
      padding: 0.75rem;
      min-width: 192px;
      border-radius: var(--border-radius-smaller);
   }

   a {
      text-decoration: none;
      color: inherit;
      font-family: inherit;
      font-size: inherit;
   }

   @media screen and (min-width: 1080px) {
      button {
         font-size: 0.9rem;
         min-width: 95px;
         padding: 0.25rem 0.5rem;
      }
   }
`
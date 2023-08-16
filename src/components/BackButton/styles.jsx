import styled from "styled-components";
import arrowLeft from "../../assets/images/arrow-left.svg";

export const StyledBackButton = styled.button`
   background-color: ${({theme}) => theme.backgroundColorLighter};
   color: ${({theme}) => theme.textColor};
   display: flex;
   justify-content: center;
   align-items: center;
   column-gap: 1.25rem;
   box-shadow: ${({darkMode}) => darkMode ? 'var(--dark-back-button-shadow)' : 'var(--back-button-shadow)'};
   padding: 0.85rem 3.15rem;
   border-radius: var(--border-radius-smaller);
   margin-bottom: 8rem;

   span {
      font-size: 1.75rem;
   }

   .arrow {
      width: 1.75rem;
      height: 1.5rem;
      mask-image: ${`url(${arrowLeft})`};
      mask-size: contain;
      mask-repeat: no-repeat;
      background-color: ${({theme}) => theme.textColor};
   }

   @media screen and (min-width: 1080px) {
      padding: 0.5rem 2rem;
      column-gap: 0.75rem;
      margin-bottom: 5rem;
      
      span {
         font-size: 1rem;
         margin-right: 6px;
      }

      .arrow {
         width: 1.1rem;
         height: 0.75rem;
      }
   }
`
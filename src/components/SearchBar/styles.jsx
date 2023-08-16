import styled from "styled-components";
import searchIcon from "../../assets/images/search-icon.svg";

export const StyledSearchBar = styled.label`
   background-color: ${({theme}) => theme.backgroundColorLighter};
   padding: 1.9rem 4rem;
   box-shadow: ${({theme}) => theme.shadow};
   display: grid;
   align-items: center;
   grid-template-columns: auto 1fr;
   column-gap: 3.25rem;
   min-width: 300px;
   box-sizing: border-box;
   border-radius: var(--border-radius);
   margin-bottom: 5rem;
   
   button {
      mask-size: contain;
      mask-image: ${`url(${searchIcon})`};
      mask-repeat: no-repeat;
      background-color: ${({theme}) => theme.placeholderTextColor};
      filter: ${({darkMode}) => !darkMode && 'brightness(0.75)'};
      height: 1.8rem;
      width: 1.8rem;
   }
   
   input {
      border: none;
      background-color: inherit;
      font-family: inherit;
      font-weight: 300;
      outline: none;
      font-size: 1.5rem;
      color: ${({theme}) => theme.textColor};
      width: 100%;
      letter-spacing: -0.2px;
      cursor: pointer;
      
      &::placeholder {
         color: ${({theme}) => theme.placeholderTextColor};
      }
   }

   @media screen and (min-width: 1080px) {
      min-width: auto;
      padding: 1.05rem 2rem;
      width: 480px;
      column-gap: 1.45rem;
      margin-bottom: 0;

      button {
         height: 1.05rem;
         width: 1.05rem;
      }

      input {
         font-size: 0.9rem;
      }
   }
`
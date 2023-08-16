import styled from "styled-components";
import arrowUp from "../../assets/images/arrow-up.svg";
import arrowDown from "../../assets/images/arrow-down.svg";
import resetIcon from "../../assets/images/reset-icon.svg";

export const StyledDropdown = styled.div`
   min-width: 300px;
   max-width: 400px;
   font-size: 1.5rem;
   font-weight: 500;
   margin-bottom: 4rem;
   position: relative;   

   button {
      margin: 0;
      padding: 0;
      line-height: 1;
   }
   
   .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      align-items: center;
      padding: 2rem 2rem 2rem 3rem;
      width: 100%;
      border-radius: var(--border-radius);
      
      .arrow, .reset_icon {
         mask-size: contain;
         background-color: ${({theme}) => theme.textColor};
         position: absolute;
         right: 2rem;
      }

      .arrow {
         width: 1.85rem;
         height: 1.85rem;
      }

      .arrow_down {
         mask-image: ${`url(${arrowDown})`};
      }

      .arrow_up {
         mask-image: ${`url(${arrowUp})`};
      }

      .reset_icon {
         width: 1.5rem;
         height: 1.5rem;
         mask-image: ${`url(${resetIcon})`};
      }

   }

   .header, ul {
      background-color: ${({theme}) => theme.backgroundColorLighter};
      box-shadow: ${({theme}) => theme.shadow};
      
   }

   ul {
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 1.5rem;
      padding: 2.25rem 3rem;
      border-radius: var(--border-radius);
   }

   @media screen and (min-width: 1080px) {
      font-size: 0.9rem;
      letter-spacing: -0.25px;
      max-width: none;
      min-width: auto;
      width: 200px;
      margin-bottom: 0;

      .header {
         padding: 1.1rem 1.5rem;
         margin-bottom: 4px;
         letter-spacing: inherit;

         .arrow, .reset_icon {
            right: 0.85rem;
         }

         .arrow {
            width: 1.2rem;
            height: 1.2rem;
         }

         .reset_icon {
            width: 0.95rem;
            height: 0.95rem;
         }
      }

      ul {
         padding: 1.25rem 1.5rem;
         row-gap: 0.85rem;
      }
   }
`
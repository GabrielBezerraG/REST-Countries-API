import styled from 'styled-components';

export const StyledHeader = styled.header`
   position: relative;
   padding: 4.2rem 1.75rem 3.75rem;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   row-gap: 0.5rem;
   background-color: ${({theme}) => theme.backgroundColorLighter};
   box-shadow: ${({theme}) => theme.shadow};

   h1 {
      font-weight: 800;
      font-size: 1.75rem;
      letter-spacing: -0.5px;
      margin-left: 0.25rem;
      min-width: 300px;
      user-select: none;
   }

   button {
      background-color: inherit;
      display: flex;
      align-items: center;
      column-gap: 1rem;
      align-self: flex-end;

      .moon_icon {
         width: 1.75rem;
         transform: rotate(-25deg);
         position: relative;
         top: -2px;
         fill: ${({theme}) => theme.textColor};
      }

      span {
         font-weight: 600;
         font-size: 1.5rem;
      }
   }

   @media screen and (min-width: 600px) {
      flex-direction: row;

      button {
         align-self: auto;
      }
   }

   @media screen and (min-width: 1080px) {
      padding: 1.75rem 4.8rem 1.65rem;

      h1 {
         font-size: 1.55rem;
      }

      button {
         column-gap: 0.45rem;

         .moon_icon {
            width: 1.2rem;
            top: -1px;
         }

         span {
            font-size: 1rem;
         }
      }
   }
`
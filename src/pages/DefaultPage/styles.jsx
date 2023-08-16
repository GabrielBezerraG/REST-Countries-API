import styled from "styled-components";

export const StyledDefaultPage = styled.div`
   color: ${({theme}) => theme.textColor};
   max-width: 1440px;
   min-height: 100vh;
   margin: 0 auto;
   display: grid;
   grid-template-rows: auto 1fr;
   overflow-x: hidden;
`
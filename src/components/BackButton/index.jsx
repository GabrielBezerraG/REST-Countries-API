import { StyledBackButton } from "./styles"
import { useContext } from "react";
import { PageContext } from "../../common/context/PageContext";
import { useNavigate } from "react-router-dom";


export default function BackButton() {

   const { theme, darkMode } = useContext(PageContext);
   const navigate = useNavigate();

   return (
      <StyledBackButton 
         theme={theme} 
         darkMode={darkMode}
         onClick={() => navigate('/')}
      >
         <i className="arrow" />
         <span>Back</span>
      </StyledBackButton>
   )
}
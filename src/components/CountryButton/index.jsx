import { useContext } from "react";
import { StyledCountryButton } from "./styles";
import { PageContext } from "../../common/context/PageContext";
import { Link } from "react-router-dom";

export default function CountryButton({ children, id }) {
   const { theme } = useContext(PageContext);

   return (
      <StyledCountryButton theme={theme}>
         <Link to={`/details/${id}`}>
            <button>
               <span>{children}</span>
            </button>
         </Link>
      </StyledCountryButton>
   )
}
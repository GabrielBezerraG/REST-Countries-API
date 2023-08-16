import { useContext } from "react";
import BackButton from "../../components/BackButton";
import CountryDetails from "../../components/CountryDetails";
import { StyledDetailsPage } from "./styles";
import { PageContext } from "../../common/context/PageContext";


export default function DetailsPage() {

   const { theme, database } = useContext(PageContext);

   return (
      <StyledDetailsPage theme={theme}>
         <BackButton />
         {database 
            ? <CountryDetails />
            : <h1>Loading...</h1>
         }
      </StyledDetailsPage>

   )
}
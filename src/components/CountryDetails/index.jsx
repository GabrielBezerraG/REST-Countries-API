import { StyledCountryDetails } from "./styles";
import MainInfo from "./MainInfo";
import AdditionalInfo from "./AdditionalInfo";
import BorderCountries from "./BorderCountries";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../../common/context/PageContext";
import formatCountryInfo from "../../common/utils/formatCountryInfo";
import findBorderCountries from "../../common/utils/findBorderCountries";

export default function CountryDetails() {

   const { id } = useParams();
   const { database } = useContext(PageContext);

   const country = database.find(item => item.cca3.toLowerCase() === id);

   const info = formatCountryInfo(country);
   const borderCountries = findBorderCountries(country, database);

   return (
      <StyledCountryDetails>
         <div className="image">
            <img src={info.image} alt={`${info.name} flag`} />
         </div>
         <div className="content">
            <h1>{info.name}</h1>
            <MainInfo
               nativeName={info.nativeName}
               population={info.population}
               region={info.region}
               subRegion={info.subregion}
               capital={info.capital}
            />
            <AdditionalInfo
               topLevelDomain={info.topLevelDomain}
               currencies={info.currencies}
               languages={info.languages}
            />
            <BorderCountries
               borderCountries={borderCountries}
            />
         </div>
      </StyledCountryDetails>
   )
}
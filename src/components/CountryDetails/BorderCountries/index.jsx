import CountryButton from "../../CountryButton";
import { StyledBorderCountries } from "./styles";

export default function BorderCountries({ borderCountries }) {
   return (
      <StyledBorderCountries className="border_countries">
         <h2>Border Countries: </h2>
         <div className="buttons">
            {borderCountries
               ? borderCountries
                  .map(country => (
                     <CountryButton id={country.id} key={country.id}>
                        {country.name}
                     </CountryButton>
                  ))
               : "No border countries"
            }
         </div>
      </StyledBorderCountries>
   )
}
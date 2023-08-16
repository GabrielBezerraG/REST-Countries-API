import { StyledCountries } from "./styles";
import Card from "./Card";
import { useContext } from "react";
import { PageContext } from "../../common/context/PageContext";

export default function CountriesList() {

   const { currentCountries } = useContext(PageContext);

   return (
      <StyledCountries>
         {currentCountries
            ? currentCountries.map(item => (
               <Card
                  name={item.name.common}
                  image={item.flags.svg}
                  capital={item.capital ? item.capital.join(', ') : "No capital"}
                  population={item.population.toLocaleString()}
                  region={item.region}
                  key={item.cca3}
                  id={item.cca3.toLowerCase()}
               />
            ))
            : <h1>Loading...</h1>
         }
      </StyledCountries>
   )
}
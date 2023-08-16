import { useContext } from "react";
import { StyledSearchBar } from "./styles";
import { PageContext } from "../../common/context/PageContext";


export default function SearchBar() {

   const { theme, 
      darkMode, 
      setCurrentCountries, 
      database,
      regionMode,
      setRegionMode,
      searchBarText,
      setSearchBarText
   } = useContext(PageContext);

   function handleSearch(text) {
      if (regionMode) {
         setRegionMode(false);
         setCurrentCountries(database);
      }

      setSearchBarText(text);

      if (searchBarText) {
         const regex = new RegExp(text, 'i');
         setCurrentCountries(
            database.filter(country => regex.test(country.name.common))
         )
      } else {
         setCurrentCountries(database);
      }
   }

   return (
      <StyledSearchBar theme={theme} darkMode={darkMode}>
         <button />
         <input
            type="text"
            value={searchBarText}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for a country..."
         />
      </StyledSearchBar>
   )
}
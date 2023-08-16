import { StyledDropdown } from "./styles";
import { useContext } from "react";
import { PageContext } from "../../common/context/PageContext";

export default function Dropdown() {

   const {
      dropdownRef,
      setDropdownVisibility,
      dropdownVisibility,
      theme,
      database,
      setCurrentCountries,
      regionMode,
      setRegionMode,
      setSearchBarText
   } = useContext(PageContext);

   const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];


   function filterCountriesByRegion(region) {
      const filteredCountries = database.filter(item => item.region === region);
      setCurrentCountries(filteredCountries);
      setDropdownVisibility(false);
      setSearchBarText('');
   }

   function handleDropdownHeaderClick() {
      if (regionMode) {
         setRegionMode(false);
         setCurrentCountries(database);
         return;
      }

      setDropdownVisibility(true);
   }

   return (
      <StyledDropdown ref={dropdownRef} theme={theme}>
         <button
            onClick={() => handleDropdownHeaderClick()}
            className="header"
         >
            <h2>
               {regionMode ? 'Reset' : 'Filter by Region'}
            </h2>
            {regionMode
               ? <i className="reset_icon" />
               : <i className={
                  `arrow ${dropdownVisibility
                     ? 'arrow_up' : 'arrow_down'}`
               } />
            }
         </button>
         {dropdownVisibility &&
            <ul>
               {regions.map(region => (
                  <li key={region}>
                     <button onClick={() => {
                        filterCountriesByRegion(region)
                        setRegionMode(true)
                     }}
                     >
                        {region}
                     </button>
                  </li>
               ))}
            </ul>}
      </StyledDropdown>
   )
}
import { createContext, useRef, useState } from "react";

export const PageContext = createContext();
export const PageContextProvider = ({ children }) => {

   const [darkMode, setDarkMode] = useState(false);
   const [dropdownVisibility, setDropdownVisibility] = useState(false);
   const [database, setDatabase] = useState();
   const [currentCountries, setCurrentCountries] = useState();
   const [selectedCountry, setSelectedCountry] = useState();
   const [regionMode, setRegionMode] = useState(false);
   const [searchBarText, setSearchBarText] = useState('');

   const theme = {
      backgroundColor: darkMode ? 'var(--dark-mode-background)' : 'var(--light-mode-background)',
      backgroundColorLighter: darkMode ? 'var(--dark-mode-elements)' : 'var(--white)',
      placeholderTextColor: darkMode ? 'var(--dark-mode-text)' : 'var(--light-mode-placeholder)',
      textColor: darkMode ? 'var(--dark-mode-text)' : 'var(--light-mode-text)',
      shadow: darkMode ? 'var(--dark-shadow)' : 'var(--shadow)',
      buttonShadow: darkMode ? 'var(--dark-button-shadow)' : 'var(--button-shadow)'
   }

   const dropdownRef = useRef(null);

   function handleOutsideClick(event) {
      !dropdownRef.current.contains(event.target)
         && setDropdownVisibility(false);
   }

   return (
      <PageContext.Provider value={{
         darkMode,
         setDarkMode,
         database,
         setDatabase,
         currentCountries,
         setCurrentCountries,
         selectedCountry,
         setSelectedCountry,
         regionMode,
         setRegionMode,
         searchBarText,
         setSearchBarText,
         dropdownVisibility,
         setDropdownVisibility,
         dropdownRef,
         handleOutsideClick,
         theme
      }}>
         {children}
      </PageContext.Provider>
   )
}
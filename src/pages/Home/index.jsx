import { useContext, useEffect } from "react";
import { PageContext } from "../../common/context/PageContext";
import SearchBar from "../../components/SearchBar";
import Dropdown from "../../components/Dropdown";
import { StyledHome } from "./styles";
import CountriesList from "../../components/CountriesList";

export default function Home() {

   const { handleOutsideClick, theme } = useContext(PageContext);

   useEffect(() => {
      document.addEventListener("click", handleOutsideClick);

      return () => {
         document.removeEventListener("click", handleOutsideClick);
      }
   }, []);

   return (
      <StyledHome theme={theme}>
         <div className="inputs">
            <SearchBar />
            <Dropdown />
         </div>
         <CountriesList />
      </StyledHome>
   )
}

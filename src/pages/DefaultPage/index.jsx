import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { StyledDefaultPage } from "./styles";
import { useContext, useEffect } from "react";
import { PageContext } from "../../common/context/PageContext";

export default function DefaultPage() {

   const { theme , setDatabase, setCurrentCountries } = useContext(PageContext);
   const location = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
         .then(response => response.json())
         .then(data => {
            const sortedData = data.sort((a, b) => a.name.common > b.name.common ? 1 : -1);
            setDatabase(sortedData);
            setCurrentCountries(sortedData);
         })
         .catch(error => {
            console.log("Error: ", error)
         })
   }, [])

   return (
      <StyledDefaultPage theme={theme}>
         <Header />
         <Outlet />
      </StyledDefaultPage>
   )
}
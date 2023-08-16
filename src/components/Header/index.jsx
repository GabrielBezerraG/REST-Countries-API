import { StyledHeader } from "./styles";
import { ReactComponent as MoonIcon } from '../../assets/images/moon-icon.svg';
import { useContext } from "react";
import { PageContext } from "../../common/context/PageContext";

export default function Header() {

   const { theme, setDarkMode } = useContext(PageContext);

   return (
      <StyledHeader theme={theme}>
         <h1>Where in the world?</h1>
         <button onClick={() => setDarkMode(prevState => !prevState)}>
            <MoonIcon className="moon_icon" />
            <span>Dark Mode</span>
         </button>
      </StyledHeader>
   )
}
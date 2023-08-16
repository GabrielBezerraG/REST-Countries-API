export default function MainInfo({ name, nativeName, population, region, subRegion, capital }) {
   return (
      <ul className="main_info">
         <li>
            <span className="bold_text">Native Name:
            </span>
            {nativeName}
         </li>
         <li>
            <span className="bold_text">Population:
            </span>
            {population}
         </li>
         <li>
            <span className="bold_text">Region:
            </span>
            {region}
         </li>
         <li>
            <span className="bold_text">Sub Region:
            </span>
            {subRegion}
         </li>
         <li>
            <span className="bold_text">Capital:
            </span>
            {capital ? capital : "No capital"}
         </li>
      </ul>
   )
}
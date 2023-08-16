export default function AdditionalInfo({ topLevelDomain, currencies, languages }) {
   return (
      <ul className="additional_info">
         <li>
            <span className="bold_text">Top Level Domain:
            </span>
            {topLevelDomain}
         </li>
         <li>
            <span className="bold_text">Currencies:
            </span>
            {currencies ? currencies : "No currencies"}
         </li>
         <li>
            <span className="bold_text">Languages:
            </span>
            {languages ? languages : "No languages"}
         </li>
      </ul>
   )
}
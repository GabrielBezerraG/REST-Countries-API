export default function formatCountryInfo(country) {

   const name = country.name.common;
   const population = country.population.toLocaleString();
   const region = country.region;
   const capital = country.capital ? country.capital.join(', ') : "No capital";
   const image = country.flags.svg;

   const nativeName = country.name.nativeName 
      ? Object.keys(country.name.nativeName)
         .map(key => country.name.nativeName[key].common)
         .join(', ')
      : "No native name";
   const subregion = country.subregion ? country.subregion : "No sub region";

   const topLevelDomain = country.tld
      ? country.tld[0] : "None";

   const currencies = country.currencies
      ? Object
         .keys(country.currencies)
         .map(key => country.currencies[key].name)
         .join(', ')
      : "No currencies";

   const languages = country.languages
      ? Object.keys(country.languages)
         .map(key => country.languages[key])
         .join(', ')
      : "No languages";

   return {
      name,
      population,
      region,
      capital,
      image,
      nativeName,
      subregion,
      topLevelDomain,
      currencies,
      languages
   }
}
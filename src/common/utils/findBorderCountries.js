export default function findBorderCountries(country, database) {
   return country.borders && country.borders
      .map(border =>
         database.filter(country => country.cca3 === border))
      .flat()
      .map(country => {
         return {
            'name': country.name.common,
            'id': country.cca3.toLowerCase()
         }
      });
}
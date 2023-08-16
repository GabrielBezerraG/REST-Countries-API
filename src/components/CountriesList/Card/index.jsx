import { useContext } from "react";
import { PageContext } from "../../../common/context/PageContext";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ name, population, region, capital, image, id }) {

   const { theme } = useContext(PageContext);

   return (
      <article
         style={{ boxShadow: theme.shadow }}
         className={styles.card}
      >
         <Link to={`details/${id}`}>
            <section
               style={
                  { backgroundImage: `url(${image})` }
               }
               className={styles.flag}
            />
         </Link>
         <section
            className={styles.info}
            style={{ backgroundColor: theme.backgroundColorLighter }}
         >
            <h3>
               {name}
            </h3>
            <p>
               <span className={styles.bold_text}>
                  Population:
               </span>
               {population}
            </p>
            <p>
               <span className={styles.bold_text}>
                  Region:
               </span>
               {region}
            </p>
            <p>
               <span className={styles.bold_text}>
                  Capital:
               </span>
               {capital}
            </p>
         </section>
      </article >
   )
}

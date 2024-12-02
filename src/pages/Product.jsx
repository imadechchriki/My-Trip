import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About MyTrip.</h2>
          <p>
MyTrip is an application that allows users to track their location on a map with secure authentication. Additionally, users have the option to save their location data in a .json file for future reference.
          </p>

        </div>
      </section>
    </main>
  );
}

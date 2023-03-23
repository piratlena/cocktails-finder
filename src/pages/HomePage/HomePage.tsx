import React from "react";
import styles from "./Home.module.scss";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

function HomePage() {
  return (
    <>
      <div className={`${styles.hero} hero`}>
        <div className={styles.container}>
          <div className={styles.search__box}>
            <Search />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

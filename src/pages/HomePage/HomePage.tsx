import React from "react";
import styles from "./Home.module.scss";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import Hero from "../../components/Hero/Hero";
import CoctailSvg from "../../components/Hero/CoctailSvg";
function HomePage() {
  return (
    <>
      <div className={`${styles.hero} hero`}>
        <div className={styles.container}>
          <div className={styles.search__box}>
            <Search />
          </div>
          <div className={styles.picture}>
            <CoctailSvg />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

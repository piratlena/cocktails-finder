import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/store";
import styles from "./Home.module.scss";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import getAllRecipies from "../../redux/actions/getBarItems";
import HeroSvg from "../../components/CocktailSvg/HeroSvg";
import CoctailSvg from "../../components/CocktailSvg/CoctailSvg";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllRecipies());
  }, [navigate]);
  return (
    <>
      <div className={`${styles.hero} hero`}>
        <div className={styles.container}>
          <div className={styles.search__box}>
            <Search />
          </div>
          <div className={styles.picture}>
            <HeroSvg />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

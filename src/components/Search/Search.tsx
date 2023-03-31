import React, { useRef, useState } from "react";
import styles from "./Search.module.scss";
import { BsSearch, BsXLg } from "react-icons/bs";

export interface SearchEvent {
  target: HTMLInputElement;
}

const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = (e: SearchEvent) => {
    setValue(e.target.value);
    inputRef.current?.focus();
  };
  return (
    <form className={`${styles.form} d-flex justify-content-center mb-5`}>
      <input
        value={value}
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder="Find your favorite recipe"
        onChange={onChangeInput}
      />
      <div className={styles.icon}>
        {value ? (
          <BsXLg style={{ color: "#f9cb28", width: "25px", height: "25px" }} />
        ) : (
          <BsSearch
            style={{ color: "#f9cb28", width: "25px", height: "25px" }}
          />
        )}
      </div>
    </form>
  );
};

export default Search;

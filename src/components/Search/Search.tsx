import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Search.module.scss";
import { BsSearch, BsXLg } from "react-icons/bs";
import debounce from "lodash.debounce";
import { useAppDispatch } from "../../redux/store/store";
import { useDebounce } from "../../hooks";
import { setQuery } from "../../redux/reducers/recipiesReducer";
import { resetPage } from "../../redux/reducers/paginationReducer";
import getByName from "../../redux/actions/getByName";
import getListRecipies from "../../redux/selectors/recepiesSelectors";

export interface SearchEvent {
  target: HTMLInputElement;
}

const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { query } = useSelector(getListRecipies);
  const dispatch = useAppDispatch();

  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setQuery(str));
    }, 150),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const onClickClear = () => {
    setValue("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    dispatch(getByName(query));
  });
  console.log(query);
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
          <BsXLg
            style={{ color: "#f9cb28", width: "25px", height: "25px" }}
            onClick={onClickClear}
          />
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

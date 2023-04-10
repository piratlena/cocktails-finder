import React, { FC } from "react";
import ReactPaginate from "react-paginate";
import { useAppDispatch } from "../../redux/store/store";
import { setCurrentPage } from "../../redux/reducers/paginationReducer";
import useResize from "../../hooks/useResize";
import { ICard } from "../../types/Card";
import { useSelector } from "react-redux";
import getAllRecipies from "../../redux/selectors/recepiesSelectors";

import styles from "./Pagination.module.scss";

export interface IPagination {
  currentPage: number;
  onChangePage: (currentPage: number) => void;
}
const Pagination: FC<IPagination> = ({ onChangePage, currentPage }) => {
  const width = useResize();

  const { itemsInList } = useSelector(getAllRecipies);
  const pageCount = itemsInList.length / 20;

  return (
    <ReactPaginate
      className={`${styles.pagination} pagination justify-content-center align-items-center my-4`}
      previousLabel="&lsaquo;"
      breakClassName={styles.break}
      nextLabel="&rsaquo;"
      nextClassName={`${styles.btn} btn btn-primary`}
      previousClassName={`${styles.btn} btn btn-primary`}
      previousLinkClassName={`${styles.fullSize}`}
      nextLinkClassName={`${styles.fullSize}`}
      pageClassName="page-item"
      pageLinkClassName={`${styles["page-link"]} page-link`}
      activeClassName="active"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      pageCount={pageCount}
    />
  );
};

export default Pagination;

import React, { useRef, useEffect } from 'react';
import './Pagination.css';
import { debounce } from '../../../utils';

export const Pagination = ({ page, setPage }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = page;
  }, [page]);

  const onChange = debounce((e) => {
    setPage(e.target.value || 1);
  }, 1000);

  return (
    <div className={'Pagination'}>
      <span onClick={() => (page === 1 ? undefined : setPage(page - 1))}>
        previous
      </span>
      <input
        ref={inputRef}
        placeholder={1}
        type="number"
        min={1}
        step={1}
        onChange={onChange}
      />
      <span onClick={() => setPage(page + 1)}>next</span>
    </div>
  );
};

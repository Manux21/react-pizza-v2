import React from 'react';
import styles from './Search.module.scss'

const Search = ({searchValue, setSearchValue}) => {
  return (
    <div className={styles.root}>

      <svg className={styles.icon} fill="none" height="24" stroke="currentColor" stroke-linecap="round"
           stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" x2="16.65" y1="21" y2="16.65"/>
      </svg>

      <input value={searchValue}
             onChange={event => setSearchValue(event.target.value)}
             className={styles.input}
             placeholder={'Поиск...'}
      />


      {searchValue && (
        <svg onClick={() => setSearchValue('')} className={styles.clearIcon} height="14px" version="1.1"
             viewBox="0 0 14 14" width="14px"><title/>
          <desc/>
          <defs/>
          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="0.5">
            <g fill="#000000" id="Core" transform="translate(-341.000000, -89.000000)">
              <g id="close" transform="translate(341.000000, 89.000000)">
                <path
                  d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"
                  id="Shape"/>
              </g>
            </g>
          </g>
        </svg>)}
    </div>
  );
};

export default Search;
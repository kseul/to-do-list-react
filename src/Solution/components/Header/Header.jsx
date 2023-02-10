import React from 'react';
import styles from './Header.module.css';

const Header = ({ filters, filter, onFilterChange }) => {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, i) => (
          <li key={i}>
            {/* 현재 map으로 filters의 filter('all'...)을 돌리고 있으므로 각각의 filter마다의 버튼클릭시 해당하는 filter값을 그대로 상위 컴포넌트의 onFilterChange로 올려준다. */}
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;

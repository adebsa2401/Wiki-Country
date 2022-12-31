import React, { useState } from 'react';
import { FaGreaterThanEqual, FaLessThanEqual } from 'react-icons/fa';

export default function Filter() {
  const [geSign, setGeSign] = useState(true);
  const [filterValue, setFilterValue] = useState(0);

  return (
    <div className="filter-container">
      <span>Population</span>
      <button
        type="button"
        onClick={() => setGeSign(!geSign)}
      >
        { geSign ? <FaGreaterThanEqual /> : <FaLessThanEqual /> }
      </button>
      <input
        type="number"
        value={filterValue}
        min={0}
        onChange={(event) => setFilterValue(event.target.value)}
      />
    </div>
  );
}

'use client'

import React, {useState} from 'react'
import style from  './style.module.scss'

function SearchBar() {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        setQuery(event.currentTarget.value);
    };

    const handleSearch = () => {
        // Здесь логика поиска
        console.log('Поиск по запросу:', query);
    };
  return (
    <div className={style.search_bar}>
        <input
            type="text"
            placeholder="Поиск товаров"
            value={query}
            onChange={handleInputChange}
        />
        <button onClick={handleSearch}>
            <svg width="24" height="24" viewBox="0 0 24 24">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="2" fill="none" />
                <line x1="15" y1="15" x2="20" y2="20" stroke="white" strokeWidth="2" />
            </svg>
        </button>
    </div>
  )
}

export default SearchBar

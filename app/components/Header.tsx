"use client"; // Mark the component as a client component

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement search functionality (this is just a console log for demonstration)
    console.log(searchTerm);
  };

  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <input
        type="text"
        className={styles.searchInput} // Use the local class here
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search jobs"
      />
      <button onClick={handleSearch} className={styles.searchButton}> {/* Use the local class here */}
        Search
      </button>
    </header>
  );
};

export default Header;

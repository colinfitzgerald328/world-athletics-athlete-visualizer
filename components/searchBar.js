import React, { useState, useEffect } from 'react';
import { Input, Button } from "@nextui-org/react";
import styles from "./styles.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [name, setName] = useState(null);
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    console.log(query)
    const response = await fetch(`https://world-athletics-376305.uc.r.appspot.com/getAthleteMarks?athlete_name=${encodeURI(query)}`);
    const data = await response.json();
    console.log
    setName(data["athlete_name"])
    setResults(data["marks"]);
  };

  return (
    <div className={styles.main}>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
      <h3>{name}</h3>
      <div className={styles.results}>
        {results.map((result) => (
          <div key={result.event_id}>
            <p>Date: {result.date}</p>
            <p>Distance: {result.event_distance}</p>
            <p>Time: {result.mark}</p>
            <p>Venue: {result.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;


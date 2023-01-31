import React, { useState, useEffect } from 'react';
import { Input, Button, Table } from "@nextui-org/react";
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

  const columns = [
    {
      key: "event_distance",
      label: "Distance",
    },
    {
      key: "mark",
      label: "Time",
    }
  ];

  return (
    <div className={styles.main}>
      <div className={styles.searchBar}>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className={styles.button}>
      <Button onClick={handleSearch}>Search</Button>
       </div>
       </div>
      <div className={styles.results}>
      <h3>{name}</h3>
      <Table
      bordered
      shadow={false}
      aria-label="Example static bordered collection table"
    >
            <Table.Header columns={columns}>
                    {(column) => (
                        <Table.Column key={column.key}>{column.label}</Table.Column>
                    )}
                </Table.Header>
                <Table.Body items={results}>
                    {(item) => (
                        <Table.Row key={item.event_id}>
                            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                        </Table.Row>
                    )}
                </Table.Body></Table>
      </div>
    </div>
  );
};

export default SearchBar;


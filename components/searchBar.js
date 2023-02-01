import React, { useState, useEffect } from 'react';
import { Input, Button, Table } from "@nextui-org/react";
import { toaster } from 'evergreen-ui'
import styles from "./styles.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [name, setName] = useState(null);
  const [athleteName, setAthleteName] = useState(null);
  const [results, setResults] = useState([]);
  const [response, setResponse] = useState(null);


  const handleSearch = async () => {
    const response = await fetch(`https://world-athletics-376305.uc.r.appspot.com/getAthleteMarks?athlete_name=${encodeURI(query)}`);
    const data = await response.json();
    console.log
    setName(data["athlete_name"])
    setResults(data["marks"]);
  };

  const columns = [
    {
      key: "date",
      label: "Date",
    },
    {
      key: "event_distance",
      label: "Distance",
    },
    {
      key: "mark",
      label: "Time",
    }, 
    {
      key: "venue", 
      label: "Venue"
    }
  ];

  const handleAthleteAdd = async () => {
    if (athleteName == null) {
      toaster.danger("Please enter an athlete name before pressing add.")
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "athlete_name": athleteName })
    };
    fetch('https://world-athletics-376305.uc.r.appspot.com/addAthlete', requestOptions)
        .then(response => response.json())
        .then(data => setResponse({ data: data }));
        if (response["data"]["operation"] == "success") {
          toaster.success('Athlete added!')
        } else {
          toaster.danger('Failed to add athlete. Please email colinfitzgerald@berkeley.edu for help.')
        }
    }
  };

  

  return (
    <div className={styles.main}>
      <h1>World Athletics Season Best Search</h1>
      <p>Welcome to the world athletics search bar! Search for an athlete of your choosing.</p> 
      <p>If you would like to add an athlete, feel free to do so. Happy searching!</p>
      <div>
      <div className={styles.searchBar}>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        css={{"width": "200px"}}
      />
      </div>
      <div className={styles.button}>
      <Button css={{"width": "200px"}} onClick={handleSearch}>Search</Button>
       </div>
       </div>
      <div className={styles.results}>
      <h3>{name}</h3>
      {results.length > 0 ? (
        <div className={styles.resultsTable}>
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
                  </Table.Body></Table></div>
      ) : (
        <div></div>
      )}
      </div>
      <div className={styles.addAthlete}>
        <p>Athlete you searched showing no results?</p>
        <p>They may not be in our database yet. </p>
        <p>Add them here!</p>
        <div className={styles.addAthletInput}>
        <Input
        type="text"
        placeholder="Athlete name..."
        value={athleteName}
        onChange={(event) => setAthleteName(event.target.value)}
        css={{"width": "200px"}}
      />
        </div>
      <div className={styles.button}>
      <Button css={{backgroundColor: "$green700", width: "200px"}} onClick={handleAthleteAdd}>Add</Button>
       </div>
       </div>
    </div>
  );
};

export default SearchBar;


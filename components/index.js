import React from "react";
import Body from "./body";
import styles from "./styles.module.css"
import SearchBar from "./searchBar";

class Root extends React.Component {
    render() {
        return(
            <div className={styles.main}>
            <SearchBar/>
            </div>
        )
    }
}


export default Root


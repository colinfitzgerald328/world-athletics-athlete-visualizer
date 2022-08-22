import React from "react";
import AthleteInfo from "./athleteInfo";
import SeasonsBests from "./seasonsBests";
import styles from "./styles.module.css"

class Body extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.floatChild}>
                <AthleteInfo/>
                </div>
                <div className={styles.floatChild}>
                <SeasonsBests/>
                </div>
            </div>
        )
    }
}

export default Body
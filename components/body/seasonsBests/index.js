import React from "react";
import styles from "./styles.module.css"
class SeasonsBests extends React.Component {
    render() {
        return(
            <body>
            <div className={styles.athleteName}>
                Season's Bests
            </div>
            <div className={styles.athleteInfoContainer}>
                <div className={styles.athleteAge}>
                400mH: 45.96
                </div>
                <div className={styles.athleteCountry}>
                400m: 44.98
                </div>
                <div className={styles.athletePrimaryEvent}>
                4x100m Relay: 38.76
                </div>
            </div>
        </body>
        )
    }
}

export default SeasonsBests
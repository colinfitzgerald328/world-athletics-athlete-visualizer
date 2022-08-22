import React from "react";
import styles from "./styles.module.css"
class SeasonsBests extends React.Component {
    render() {
        return(
            <div>
            <div className={styles.seasonsBest}>
                Season's Bests
            </div>
            <div className={styles.seasonBestContainer}>
                <div className={styles.firstSeasonBest}>
                400mH: 45.96
                </div>
                <div className={styles.secondSeasonBest}>
                400m: 44.98
                </div>
                <div className={styles.thirdSeasonBest}>
                4x100m Relay: 38.76
                </div>
            </div>
        </div>
        )
    }
}

export default SeasonsBests
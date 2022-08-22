import React from "react"
import styles from "./styles.module.css"


class AthleteInfo extends React.Component {
    render() {
        return(
            <div>
                <div className={styles.athleteName}>
                    Karsten Warholm
                </div>
                <img className={styles.athleteImage} src="https://assets.aws.worldathletics.org/large/62cdfe8bac0d464eea6d4f1a.jpg"/>
                <div className={styles.athleteInfoContainer}>
                    <div className={styles.athleteAge}>
                    Age: 24
                    </div>
                    <div className={styles.athleteCountry}>
                    Country: Norway
                    </div>
                    <div className={styles.athletePrimaryEvent}>
                    Primary Event: 400mH
                    </div>
                </div>
            </div>
        )
    }
}

export default AthleteInfo


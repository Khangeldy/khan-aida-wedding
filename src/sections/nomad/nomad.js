import React from 'react'

import * as styles from './nomad.module.css'

const NomadSection = () => {
    return (
        <div className={styles.nomad}>
            <img className={styles.plane} src="/plane.svg" alt="plane" />
            <div className={styles.bottom}>
                <p className={styles.distance}>2,656.4 km</p>
                <p className={styles.city}>Орал мен Алматы</p>
            </div>
        </div>
    )
}

export default NomadSection
import React from 'react'

import * as styles from './info.module.css'

const InfoSection = () => {
    return (
        <div className={styles.info}>
            <div className={styles.owners}>Той иелері: <br/> Махабат - Гульнар</div>
            <div>Осы күнді күнтізбеде бояп қой. Басталуы 18:00 де</div>
                <div className={styles.date}>
                    <div className={styles.dateItem}>19</div>
                    <div className={styles.dateItem}>08</div>
                    <div className={styles.dateItem}>2022</div>
                </div>
                <div className={styles.address}>
                    <strong>Мекен жайымыз</strong> Алматы қаласы, Дулати даңғылы "Белые розы" мейрамханасы.
                </div>
        </div>
    )
}

export default InfoSection
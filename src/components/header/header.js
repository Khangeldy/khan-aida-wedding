import React from 'react'
import { motion } from 'framer-motion'

import { FADE_DOWN } from '../../utils/constants'
import * as styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <motion.div
                className={styles.title}
                initial="hidden"
                transition={{duration: 0.7}}
                whileInView="visible"
                variants={FADE_DOWN}>
                Тойға шақыру
            </motion.div>
        </header>
    )
}

export default Header
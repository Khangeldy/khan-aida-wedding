import React from 'react'
import { motion } from 'framer-motion'

import VideoBackground from '../../components/video-background/video'
import { FADE_DOWN } from '../../utils/constants'
import * as styles from './intro.module.css'

const IntroSection = () => {
    return (
        <div className={styles.intro}>
				<VideoBackground />
				<div className={styles.content}>
					<div className={styles.center}>
						<motion.div
							initial="hidden"
                            variants={FADE_DOWN}
                            whileInView="visible"
							className={styles.center}>
								<img src="/khangeldy.svg" />
						</motion.div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									duration: 1.2,
									delay: 1.4
								}
							}}
							className={styles.center}>
								<img src="/ampersand.svg" />
						</motion.div>
						<motion.div
							initial="hidden"
                            whileInView="visible"
                            variants={FADE_DOWN}
							className={styles.center}>
								<img src="/aida.svg" />
						</motion.div>
					</div>
				</div>
			</div>
    )
}

export default IntroSection
import React from 'react'
import * as styles from './video.module.css'

const VideoBackground = () => {
    return (
        <video className={styles.video} autoPlay muted loop id="video">
            <source src="/bg.webm" type="video/webm" />
        </video>
    )
}

export default VideoBackground
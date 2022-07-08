import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { FADE_DOWN } from '../../utils/constants'
import * as styles from "./dear.module.css";

const DearSection = () => {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        if (!urlParams) {
            return;
        }
        const g = urlParams.get("guest");

        if (g) {
            const list = g.split(",");
            setGuests(list);
        }
    }, []);
    return (
        <div className={styles.dear}>
            <div className={styles.center}>
                {guests.map((x, i) => (
                    <motion.div
                        key={x}
                        initial="hidden"
                        transition={{ duration: 1.2, delay: i * 0.5 }}
                        variants={FADE_DOWN}
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {x}
                    </motion.div>
                ))}
                <motion.div
                    initial="hidden"
                    variants={FADE_DOWN}
                    transition={{ duration: 0.8 }}
                    whileInView="visible"
                    viewport={{ once: true }}
                    >
                    <p className={styles.text}>
Сіздерді балаларымыз Хангелді мен Аиданың отау тігіп, шаңырақ көтерген үйлену тойының құрметті қонағы болуға, салтанатты шараға бізбен бірге қуанышқа ортақтасуға шақырамыз! 
</p>
                <p></p>
                </motion.div>
            </div>
        </div>
    );
};

export default DearSection;

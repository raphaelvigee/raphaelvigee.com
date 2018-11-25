import React from "react";
import styles from './Entry.scss';

export default function Entry({date, title, details, location}) {
    return (
        <div className={styles.entry}>
            {date && (
                <div className={styles.date}>
                    {date}
                </div>
            )}

            {title && (
                <div className={styles.title}>
                    {title}
                </div>
            )}

            {details && (
                <div className={styles.details}>
                    {details}
                </div>
            )}

            {location && (
                <div className={styles.location}>
                    {location}
                </div>
            )}
        </div>
    )
}

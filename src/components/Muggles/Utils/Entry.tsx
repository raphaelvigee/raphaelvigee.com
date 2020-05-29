import {ReactNode} from 'react';
import * as React from 'react';
import styles from './Entry.scss';

interface IEntry {
    date?: ReactNode;
    title?: ReactNode;
    details?: ReactNode;
    location?: ReactNode;
}

const Entry: React.FC<IEntry> = ({date = null, title = null, details = null, location = null}) => {
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
    );
};

export default Entry;

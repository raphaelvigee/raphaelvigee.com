import { PropsWithChildren } from 'react';
import * as React from 'react';
import styles from './Page.scss';

export default function Page({ children }: PropsWithChildren<unknown>) {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.pageContent}>{children}</div>
        </div>
    );
}

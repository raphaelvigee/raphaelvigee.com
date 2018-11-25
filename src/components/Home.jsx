import React from 'react';

import styles from './Home.scss';
import Button from "./Button";

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <span className={styles.description}>
                        I'm a Software Engineer
                    </span>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.buttonsContainer}>
                        <Button label={"Education"}/>
                        <Button label={"Experiences"}/>
                        <Button label={"CV"}/>
                    </div>
                </div>
            </div>
        )
    }
}

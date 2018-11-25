import React from 'react';

import styles from './Home.scss';
import LinkButton from "./LinkButton";

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
                        <LinkButton to={'/education'} label={"Education"}/>
                        <LinkButton to={'/experiences'} label={"Experiences"}/>
                        <LinkButton to={'/resume'} label={"Resume"}/>
                    </div>
                </div>
            </div>
        )
    }
}

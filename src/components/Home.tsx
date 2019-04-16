import * as React from "react";

import * as styles from "./Home.scss";
import LinkButton from "./LinkButton";

const Home: React.FC<{}> = () => (
    <div className={styles.container}>
        <div className={styles.top}>
            <span className={styles.description}>
                I'm a Software Engineer
            </span>
        </div>
        <div className={styles.bottom}>
            <div className={styles.buttonsContainer}>
                <LinkButton to={"/education"} label={"Education"}/>
                <LinkButton to={"/hacks"} label={"Hacks"}/>
                <LinkButton to={"/experiences"} label={"Experiences"}/>
                <LinkButton to={"/resume"} label={"Résumé"}/>
            </div>
        </div>
    </div>
);

export default Home;

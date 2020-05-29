import {PropsWithChildren} from "react";
import * as React from "react";
import styles from "./Page.scss";

const Page: React.FC<PropsWithChildren<{}>> = ({children}) => (
    <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
            {children}
        </div>
    </div>
);

export default Page;

import * as React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";

import styles from "./Button.scss";

interface IProps extends NavLinkProps {
    label: string;
}

const LinkButton: React.FC<IProps> = ({label, ...rest}) => (
    <NavLink className={styles.btn} {...rest}>
        {label}
    </NavLink>
);

export default LinkButton;

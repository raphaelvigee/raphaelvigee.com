import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './Button.scss';

interface LinkButtonProps extends NavLinkProps {
    label: string;
}

export default function LinkButton({ label, ...rest }: LinkButtonProps) {
    return (
        <NavLink className={styles.btn} {...rest}>
            {label}
        </NavLink>
    );
}

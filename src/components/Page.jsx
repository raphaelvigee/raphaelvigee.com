import React from 'react';
import styles from './Page.scss';

export default class Page extends React.Component{
    render() {
        return (
            <div className={styles.pageContainer}>
                <div className={styles.pageContent}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

import cx from 'classnames';
import {ReactNode} from 'react';
import * as React from 'react';
import styles from './Entry.scss';

interface IEntry {
    decorator?: ReactNode;
    date?: ReactNode;
    title?: ReactNode;
    details?: ReactNode;
    location?: ReactNode;
}

export function BlueBorderDecorator() {
    return <div className={cx(styles.decorator, styles.border, styles.blue)} />;
}

interface ILabelDecoratorProps {
    text: string;
}

export function BlueLabelDecorator({text}: ILabelDecoratorProps) {
    return <div className={cx(styles.decorator, styles.label, styles.blue)}>{text}</div>;
}

export function PinkLabelDecorator({text}: ILabelDecoratorProps) {
    return <div className={cx(styles.decorator, styles.label, styles.pink)}>{text}</div>;
}

export default function Entry({
  decorator = <BlueBorderDecorator />,
  date = null,
  title = null,
  details = null,
  location = null,
}: IEntry) {
    return (
        <div className={styles.entry}>
            {decorator}

            <div className={styles.content}>
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
        </div>
    );
}

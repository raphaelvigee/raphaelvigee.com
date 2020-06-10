import * as React from 'react';
import useScrollBottom from '../../useScrollBottom';
import meme from './meme.jpg';
import styles from './Meme.scss';

export default function Meme({ joke }: { joke: string }) {
    const scroll = useScrollBottom();

    return (
        <div className={styles.meme}>
            <div className={styles.joke}>
                <span>{joke}</span>
            </div>
            <img src={meme} onLoad={scroll} />
        </div>
    );
}

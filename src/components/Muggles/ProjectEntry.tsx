import * as React from 'react';
import GradientLine from './Utils/GradientLine';
import styles from './ProjectEntry.scss';

interface TagProps {
    name: string;
}

function Tag({ name }: TagProps) {
    return <span className={styles.tag}>{name}</span>;
}

interface ProjectEntryProps {
    title: string;
    link: string;
    description: string;
    tags: TagProps[];
}

export default function ProjectEntry({ title, link, description, tags = [] }: ProjectEntryProps) {
    return (
        <div className={styles.entry}>
            <GradientLine width={'100%'} />
            <div className={styles.content}>
                <div className={styles.title}>
                    {link ? (
                        <a href={link} target={'_blank'} rel="noreferrer">
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                </div>

                <div className={styles.description}>{description}</div>

                <div className={styles.tags}>
                    {tags.map((tag, i) => (
                        <Tag key={i} {...tag} />
                    ))}
                </div>
            </div>
        </div>
    );
}

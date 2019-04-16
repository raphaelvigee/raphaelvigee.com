import * as React from 'react';
import GradientLine from './GradientLine';
import * as styles from './ProjectEntry.scss';

interface ITag {
    name: string;
}

const Tag: React.FC<ITag> = ({name}) => {
    return (
        <span className={styles.tag}>
            {name}
        </span>
    );
};

interface IProjectEntry {
    title: string;
    link: string;
    description: string;
    tags: ITag[];
}

const ProjectEntry: React.FC<IProjectEntry> = ({title, link, description, tags = []}) => (
    <div className={styles.entry}>
        <GradientLine width={'100%'}/>
        <div className={styles.content}>
            <div className={styles.title}>
                {link ? (
                    <a href={link} target={'_blank'}>{title}</a>
                ) : title}
            </div>

            <div>
                {description}
            </div>

            <div className={styles.tags}>
                {tags.map((tag, i) => <Tag key={i} {...tag} />)}
            </div>
        </div>
    </div>
);

export default ProjectEntry;

import React from "react";
import styles from './ProjectEntry.scss'
import GradientLine from "./GradientLine";

function Tag({name}) {
    return (
        <span className={styles.tag}>
            {name}
        </span>
    )
}

export default function ProjectEntry({title, link, description, tags = []}) {
    return (
        <div className={styles.entry}>
            <GradientLine width={"100%"}/>
            <div className={styles.content}>
                <div className={styles.title}>
                    {link ? (
                        <a href={link} target={"_blank"}>{title}</a>
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
    )
}

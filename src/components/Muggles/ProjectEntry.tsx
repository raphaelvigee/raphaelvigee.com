import { linearGradient } from 'polished';
import * as React from 'react';
import styled from 'styled-components';
import { Fonts } from '../../styled';
import GradientLine from './Utils/GradientLine';

interface TagProps {
    name: string;
}

const TagContainer = styled.span`
    background-image: ${(props) =>
        linearGradient({
            colorStops: [props.theme.secondary, props.theme.primary],
            fallback: props.theme.primary,
            toDirection: 'to bottom right',
        })};
    border-radius: 4px;
    padding: 0.2em 0.8em;
    font-size: 0.7em;
    margin-right: 5px;
    color: white;
`;

function Tag({ name }: TagProps) {
    return <TagContainer>{name}</TagContainer>;
}

interface ProjectEntryProps {
    title: string;
    link: string;
    description: string;
    tags: TagProps[];
}

const Entry = styled.div`
    background: white;
    margin-top: 1em;
`;

const Content = styled.div`
    padding: 1em;
`;

const Title = styled.div`
    ${Fonts.LemonMilk};
    font-weight: normal;
    color: ${(props) => props.theme.primary};
    margin-bottom: 10px;

    a {
        color: inherit;
    }
`;

const Description = styled.div`
    color: black;
`;

const Tags = styled.div`
    margin-top: 10px;
`;

export default function ProjectEntry({ title, link, description, tags = [] }: ProjectEntryProps) {
    return (
        <Entry>
            <GradientLine width={'100%'} />
            <Content>
                <Title>
                    {link ? (
                        <a href={link} target={'_blank'} rel="noreferrer">
                            {title}
                        </a>
                    ) : (
                        title
                    )}
                </Title>

                <Description>{description}</Description>

                <Tags>
                    {tags.map((tag, i) => (
                        <Tag key={i} {...tag} />
                    ))}
                </Tags>
            </Content>
        </Entry>
    );
}

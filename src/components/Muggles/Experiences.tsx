import * as React from 'react';
import { JobExperiences, ProjectExperiences } from '../../content';
import Entry from './Utils/Entry';
import Page from './Page';
import ProjectEntry from './ProjectEntry';
import SubTitle from './Utils/SubTitle';
import Title from './Utils/Title';

export default function Experiences() {
    return (
        <Page>
            <Title style={{ marginBottom: 60 }} label={'Experiences'} />

            <SubTitle label={'Jobs'} />

            {JobExperiences.map((e, i) => (
                <Entry key={i} {...e} />
            ))}

            <SubTitle style={{ marginTop: 60 }} label={'Projects'} />

            {ProjectExperiences.map((e, i) => (
                <ProjectEntry key={i} {...e} />
            ))}
        </Page>
    );
}

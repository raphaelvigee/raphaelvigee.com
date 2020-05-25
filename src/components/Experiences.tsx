import * as React from 'react';
import {JobExperiences, ProjectExperiences} from './content';
import Entry from './Entry';
import Page from './Page';
import ProjectEntry from './ProjectEntry';
import SubTitle from './SubTitle';
import Title from './Title';

const Experiences: React.FC = () => (
    <Page>
        <Title style={{marginBottom: 60}} label={'Experiences'}/>

        <SubTitle label={'Jobs'}/>

        {JobExperiences.map((e) => (
            <Entry {...e}/>
        ))}

    <SubTitle style={{marginTop: 60}} label={'Projects'}/>

        {ProjectExperiences.map((e) => (
            <ProjectEntry {...e}/>
        ))}
    </Page>
);

export default Experiences;

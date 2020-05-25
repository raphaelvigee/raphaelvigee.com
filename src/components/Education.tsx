import * as React from 'react';
import {Education as EducationItems} from './content';
import Entry from './Entry';
import Page from './Page';
import Title from './Title';

const Education: React.FC = () => (
    <Page>
            <Title style={{marginBottom: 60}} label={'Education'}/>

            {EducationItems.map((e) => (
                <Entry {...e}/>
            ))}
    </Page>
);

export default Education;

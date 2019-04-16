import * as React from 'react';
import Entry from './Entry';
import Page from './Page';
import Title from './Title';

const Education: React.FC = () => (
    <Page>
        <Title style={{marginBottom: 60}} label={'Education'}/>

        <Entry date={'September 2016 - June 2020'}
               title={'BSc Computer Science (Artificial Intelligence) with a Year in Industry'}
               location={'University of Kent, United Kingdom'}/>

        <Entry date={'June 2016'}
               title={'French Baccalaureate with honors'}
               details={'Engineering Sciences'}
               location={'Lycée Janson de Sailly, Paris, France'}/>

        <Entry date={'19th May 2016'}
               title={'IELTS - English Proficiency Exam | 7.5 Overall'}
               details={'Listening : 8.0 | Reading : 7.0 | Writing : 6.0 | Speaking : 8.0'}/>

        <Entry date={'June 2009'}
               title={'School Certificate with honors'}
               location={'Lycée Janson de Sailly, Paris, France'}/>
    </Page>
);

export default Education;

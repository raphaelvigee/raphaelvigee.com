import * as React from 'react';
// @ts-ignore
import CVShort from '../assets/cv/CV_Raphael_Vigee.short.pdf';
import {LinkButton} from './Button';
import Page from './Page';
import Title from './Title';

const Resume: React.FC = () => (
    <Page>
        <Title style={{marginBottom: 60}} label={'Résumé'}/>

        <LinkButton href={CVShort} target={'_blank'} label={'Résumé'}/>

        {/*<br/>*/}

        {/*<LinkButton href={CVShort} target={"_blank"} label={"Resume (2 pages)"}/>*/}
    </Page>
);

export default Resume;

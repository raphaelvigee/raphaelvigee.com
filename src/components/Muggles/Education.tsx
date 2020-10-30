import * as React from 'react';
import { Education as EducationItems } from '../../content';
import Entry from './Utils/Entry';
import Page from './Page';
import Title from './Utils/Title';

export default function Education() {
    return (
        <Page>
            <Title style={{ marginBottom: 60 }} label={'Education'} />

            {EducationItems.map((e, i) => (
                <Entry key={i} {...e} />
            ))}
        </Page>
    );
}

import * as React from 'react';
import { Hacks as HacksItems } from '../../content';
import Entry from './Utils/Entry';
import Page from './Page';
import Title from './Utils/Title';

export default function Hacks() {
    return (
        <Page>
            <Title style={{ marginBottom: 60 }} label={'Hacks'} />
            {HacksItems.map((h, i) => (
                <Entry key={i} {...h} />
            ))}
        </Page>
    );
}

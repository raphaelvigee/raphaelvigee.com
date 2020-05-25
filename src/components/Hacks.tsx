import * as React from 'react';
import {Hacks as HacksItems} from './content';
import Entry from './Entry';
import Page from './Page';
import Title from './Title';

const Hacks: React.FC = () => (
    <Page>
        <Title style={{marginBottom: 60}} label={'Hacks'}/>

            {HacksItems.map((h) => (
                <Entry {...h} />
            ))},
    </Page>
);

export default Hacks;

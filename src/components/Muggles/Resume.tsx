import * as React from 'react';
import styled from 'styled-components';
import CVShort from '../../assets/cv/CV_Raphael_Vigee.short.pdf';
import Button from './Utils/Button';
import Page from './Page';
import Title from './Utils/Title';

const CVUrl = `${CVShort}?#zoom=FitH&scrollbar=0&toolbar=0&navpanes=0`;

const PDF = styled.object`
    width: 100%;
    height: 80vh;
`;

export default function Resume() {
    return (
        <Page>
            <Title style={{ marginBottom: 30 }} label={'Résumé'} />

            <a href={CVShort} download={'CV Raphael Vigee'}>
                <Button label={'Download'} />
            </a>

            <PDF type="application/pdf" data={CVUrl}>
                <p>Insert your error message here, if the PDF cannot be displayed.</p>
            </PDF>
        </Page>
    );
}

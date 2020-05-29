import * as React from 'react';
import CVShort from '../../assets/cv/CV_Raphael_Vigee.short.pdf';
import Button from './Utils/Button';
import Page from './Page';
import styles from './Resume.scss';
import Title from './Utils/Title';

const CVUrl = `${CVShort}?#zoom=FitH&scrollbar=0&toolbar=0&navpanes=0`;

const Resume: React.FC = () => (
    <Page>
        <Title style={{ marginBottom: 30 }} label={'Résumé'} />

        <a href={CVShort} download={'CV Raphael Vigee'}>
            <Button label={'Download'} />
        </a>

        <object className={styles.pdf} type="application/pdf" data={CVUrl}>
            <p>Insert your error message here, if the PDF cannot be displayed.</p>
        </object>
    </Page>
);

export default Resume;

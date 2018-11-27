import React from 'react';
import Page from "./Page";
import Title from "./Title";
import {LinkButton} from "./Button";
import CVShort from '../assets/cv/CV_Raphael_Vigee.short.pdf'

export default class Resume extends React.Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={"Résumé"}/>

                <LinkButton href={CVShort} target={"_blank"} label={"Résumé"}/>

                {/*<br/>*/}

                {/*<LinkButton href={CVShort} target={"_blank"} label={"Resume (2 pages)"}/>*/}
            </Page>
        )
    }
}

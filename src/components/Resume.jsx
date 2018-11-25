import React from 'react';
import Page from "./Page";
import Title from "./Title";
import Button from "./Button";

export default class Resume extends React.Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={"Resume"}/>

                <Button href={"#"} label={"Resume"} />

                <br/>

                <Button href={"#"} label={"Resume (2 pages)"} />
            </Page>
        )
    }
}

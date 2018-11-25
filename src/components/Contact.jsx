import React from 'react';
import Page from "./Page";
import Title from "./Title";
import {InputText, InputTextArea} from "./Form";
import Button from "./Button";

export default class Contact extends React.Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={"Contact"}/>

                {this.renderForm()}
            </Page>
        )
    }

    renderForm() {
        return (
            <React.Fragment>
                <InputText placeholder={"Name"}/>
                <InputText placeholder={"Email"}/>
                <InputTextArea placeholder={"Message"}/>

                <Button label={"Send"}/>
            </React.Fragment>
        )
    }
}

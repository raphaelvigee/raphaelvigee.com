import React from 'react';
import Page from "./Page";
import Title from "./Title";
import {InputText, InputTextArea} from "./Form";
import Button from "./Button";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            content: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(name, event) {
        this.setState({
            [name]: event.target.value,
        })
    }

    async handleSubmit() {
        if(this.isSubmitDisabled()) {
            return;
        }

        const response = await fetch(process.env.CONTACT_FORM_URL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                content: this.state.content,
            })
        });
        const data = await response.json();

        console.log(data)
    }

    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={"Contact"}/>

                {this.renderForm()}
            </Page>
        )
    }

    isSubmitDisabled() {
        if(this.state.name.length === 0) {
            return true;
        }

        if(this.state.email.length === 0) {
            return true;
        }

        if(this.state.content.length === 0) {
            return true;
        }

        return false;
    }

    renderForm() {
        return (
            <React.Fragment>
                <InputText value={this.state.name}
                           onChange={(e) => this.handleChange('name', e)}
                           placeholder={"Name"}/>
                <InputText value={this.state.email}
                           onChange={(e) => this.handleChange('email', e)}
                           placeholder={"Email"}/>
                <InputTextArea value={this.state.content}
                               onChange={(e) => this.handleChange('content', e)}
                               placeholder={"Message"}/>

                <Button disabled={this.isSubmitDisabled()} onClick={this.handleSubmit} label={"Send"}/>
            </React.Fragment>
        )
    }
}

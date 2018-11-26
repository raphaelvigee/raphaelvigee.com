import React from 'react';
import Page from "./Page";
import Title from "./Title";
import {InputText, InputTextArea} from "./Form";
import Button from "./Button";
import cx from 'classnames';
import styles from './Contact.scss';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            content: "",
            response: null,
            processing: false,
            ok: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(name, event) {
        this.setState({
            [name]: event.target.value,
        })
    }

    async handleSubmit() {
        if (!this.canSubmit()) {
            return;
        }

        this.setState({
            processing: true,
        });

        try {
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

            this.setState({
                response: data,
                ok: response.ok,
            })
        } catch (e) {
            this.setState({
                response: {error: "Unexpected error, please try again later"},
                ok: false,
            })
        } finally {
            this.setState({
                processing: false,
            })
        }
    }

    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={"Contact"}/>

                {this.renderForm()}
            </Page>
        )
    }

    isValid() {
        if (this.state.name.length === 0) {
            return false;
        }

        if (this.state.email.length === 0) {
            return false;
        }

        if (this.state.content.length === 0) {
            return false;
        }

        return true;
    }

    canSubmit() {
        if (this.state.processing) {
            return false
        }

        if (this.state.response && this.state.ok) {
            return false
        }

        if (!this.isValid()) {
            return false;
        }

        return true;
    }

    renderForm() {
        const {ok, response} = this.state;

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

                <div className={styles.holder}>
                    <Button disabled={!this.canSubmit()} onClick={this.handleSubmit} label={"Send"}/>

                    {response && (
                        <span className={cx(styles.message, ok && styles.success, !ok && styles.error)}>
                            {ok ? 'Message sent, I\'ll be in touch!' : response.error}
                        </span>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

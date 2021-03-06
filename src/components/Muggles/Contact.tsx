import * as React from 'react';
import styled from 'styled-components';
import Button from './Utils/Button';
import { InputText, InputTextArea } from './Form';
import Page from './Page';
import Title from './Utils/Title';

interface ContactState {
    name: string;
    email: string;
    content: string;
    response: any;
    processing: boolean;
    ok: boolean;
}

const Holder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const Message = styled.span.attrs({
    ok: false,
})`
    margin-left: 10px;
    color: ${(props) => (props.ok ? '#4BB543' : '#cc0000')};
`;

export default class Contact extends React.Component<Record<string, unknown>, ContactState> {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
            email: '',
            name: '',
            ok: false,
            processing: false,
            response: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(
        name: 'name' | 'content' | 'email',
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        this.setState({
            [name]: event.target.value,
        } as { [k in typeof name]: string });
    }

    public async handleSubmit() {
        if (!this.canSubmit()) {
            return;
        }

        this.setState({
            processing: true,
        });

        try {
            const response = await fetch(process.env.CONTACT_FORM_URL as string, {
                body: JSON.stringify({
                    content: this.state.content,
                    email: this.state.email,
                    name: this.state.name,
                }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });

            const data = await response.json();

            this.setState({
                ok: response.ok,
                response: data,
            });
        } catch (e) {
            this.setState({
                ok: false,
                response: { error: 'Unexpected error, please try again later' },
            });
        } finally {
            this.setState({
                processing: false,
            });
        }
    }

    public render() {
        return (
            <Page>
                <Title style={{ marginBottom: 60 }} label={'Contact'} />

                {this.renderForm()}
            </Page>
        );
    }

    public isValid() {
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

    public canSubmit() {
        if (this.state.processing) {
            return false;
        }

        if (this.state.response && this.state.ok) {
            return false;
        }

        if (!this.isValid()) {
            return false;
        }

        return true;
    }

    public renderForm() {
        const { ok, response } = this.state;

        return (
            <React.Fragment>
                <InputText
                    value={this.state.name}
                    onChange={(e) => this.handleChange('name', e)}
                    placeholder={'Name'}
                />
                <InputText
                    value={this.state.email}
                    onChange={(e) => this.handleChange('email', e)}
                    placeholder={'Email'}
                />
                <InputTextArea
                    value={this.state.content}
                    onChange={(e) => this.handleChange('content', e)}
                    placeholder={'Message'}
                />

                <Holder>
                    <Button disabled={!this.canSubmit()} onClick={this.handleSubmit} label={'Send'} />

                    {response && <Message ok={ok}>{ok ? "Message sent, I'll be in touch!" : response.error}</Message>}
                </Holder>
            </React.Fragment>
        );
    }
}

import React, { Component } from 'react';

import classes from './ContactForm.css';
import Button from '../../../components/UI/Button/Button.jsx';
// import Spinner from '../../../components/UI/Spinner/Spinner.jsx';
import Input from '../../../components/UI/Input/Input.jsx';
import { updateObject, checkValidity } from '../../../shared/utility';

class ContactForm extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name',
                    name: 'Name'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 30
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-Mail',
                    name: 'Reply to'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Subject',
                    name: 'Subject'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 100
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Message',
                    name: 'Message'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 1000
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
            touched: true
        });

        const updatedOrderForm = updateObject(this.state.orderForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form action="https://formspree.io/contact@andrasnett.com" method="POST">
                {formElementsArray.map((formElement, index) => {
                    return <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                })}
                <div className={classes.Button}>
                    <Button disabled={!this.state.formIsValid}>SEND</Button>
                </div>
            </form>
        );

        // if (this.props.loading) {
        //     form = <Spinner />;
        // }

        return (
            <div className={classes.ContactForm}>
                {form}
            </div>
        );
    }
}


export default ContactForm;
import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {

    state = {
        step : 1,
        firstName : '',
        lastName : '',
        email : '',
        city : '',
        bio: ''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step : step - 1
        })
    }

    // handle fields change 
    handleChange = input => e => {
        this.setState({
            [input] : e.target.value
        });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, emial, city, bio} = this.state;
        const values = { firstName, lastName, emial, city, bio};

        switch(step) {
            case 1 :
                return (
                    <FormUserDetails 
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2 :
                return (<h1>  Test 2 </h1>)

            case 3 : 
                return (<h1>  Test 3 </h1>)

            case 4 :
                return (<h1>  Test 4 </h1>)

            default:
                /* code */
                break;

        }

        return (
            <div>
                h1
            </div>
        )
    }
}

export default UserForm

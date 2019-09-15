import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List , ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        /*  Need send out to the back end to fetch the data */  
        this.props.nextStep();
    }

    goBack = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        return (
            <center>
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <h1> Thank you for your submission</h1>
                 </React.Fragment>
            </MuiThemeProvider>
            </center>
        )
    }
}
const styles = {
    button: {
      margin: 15
    }
  };

export default Confirm
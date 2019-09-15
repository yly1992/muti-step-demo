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
        const { values : { firstName, lastName, email, city, bio} } = this.props;
        return (
            <center>
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List >
                        <ListItem 
                            primaryText="First Name"
                            secondaryText= { firstName }
                        />
                         <ListItem 
                            primaryText="Last Name"
                            secondaryText= { lastName }
                        />
                         <ListItem 
                            primaryText="Email"
                            secondaryText= { email }
                        />
                         <ListItem 
                            primaryText="City"
                            secondaryText= { city }
                        />
                         <ListItem 
                            primaryText="Bio"
                            secondaryText= { bio }
                        />
                    </List>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.goBack}
                    />

                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
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
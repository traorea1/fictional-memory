import React, { Component } from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'; 
import RaisedButton from 'material-ui/RaisedButton'; 
import {List, ListItem} from 'material-ui/List';  
import Alert from '@material-ui/lab/Alert'; 

export class Success extends Component {
    render() {
        const {values:{ 
            title, prenom, nom}} = this.props; 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Sinistre Enregistrer" />
                    <Alert severity="success">{title}. {prenom} {nom} Votre Problème fut enregistré.
                    </Alert>    
                    <p>Nous vous contacterons dans très peu de temps pou le suivis.</p>
                    <p>Toute l'équipe d'Axa vous dit '''YAKO''' pour ce Sinistre !!!</p>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default Success; 


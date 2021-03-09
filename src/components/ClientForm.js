import React, { Component } from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'; 
import TextField from 'material-ui/TextField'; 
import RaisedButton from 'material-ui/RaisedButton'; 

export class ClientForm extends Component {
    continue = e =>{
        e.preventDefault(); 
        this.props.nextStep(); 
    }
    render() {
        const {values, handleChange} = this.props; 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Vos Infos Clients" />
                    <TextField 
                        hintText="Votre titre"
                        floatingLabelText="Title"
                        onChange = {handleChange('title')}
                        defaultValue={values.title} 
                        style = {styles.button}
                    />
                    <TextField 
                        hintText="Votre Prenom"
                        floatingLabelText="Prénom"
                        onChange = {handleChange('prenom')}
                        defaultValue={values.prenom} 
                        style = {styles.button}
                    />
                    <br />
                    <TextField 
                        hintText="Votre Nom"
                        floatingLabelText="Nom"
                        onChange = {handleChange('nom')}
                        defaultValue={values.nom} 
                        style = {styles.button}
                    />
                    
                    <TextField 
                        hintText="Rue de résidence"
                        floatingLabelText="rue"
                        onChange = {handleChange('rue')}
                        defaultValue={values.rue} 
                        style = {styles.button}
                    />
                    <br />
                    <TextField 
                        hintText="Numero de la rue"
                        floatingLabelText="Numero Rue"
                        onChange = {handleChange('numrue')}
                        defaultValue={values.numrue} 
                        style = {styles.button}
                    />
                    <TextField 
                        hintText="Votre code  Postale"
                        floatingLabelText="Code Postale"
                        onChange = {handleChange('numpost')}
                        defaultValue={values.numpost} 
                        style = {styles.button}
                    />
                    <br />
                    <TextField 
                        hintText="NPA"
                        floatingLabelText="NPA"
                        onChange = {handleChange('npa')}
                        defaultValue={values.npa} 
                        style = {styles.button}
                    />
                
                    <TextField 
                        hintText="Votre Localite"
                        floatingLabelText="Localite"
                        onChange = {handleChange('localite')}
                        defaultValue={values.localite} 
                        style = {styles.button}
                    />
                    <br />
                    <TextField 
                        hintText="Votre Pays"
                        floatingLabelText="Pays"
                        onChange = {handleChange('pays')}
                        defaultValue={values.pays} 
                        style = {styles.button}
                    />
                    
                    <TextField 
                        hintText="Votre Numero de telephone"
                        floatingLabelText="Num tel"
                        onChange = {handleChange('numtel')}
                        defaultValue={values.numtel} 
                        style = {styles.button}
                    />
                    <br />
                    <TextField 
                        hintText="Votre email"
                        floatingLabelText="email"
                        onChange = {handleChange('email')}
                        defaultValue={values.email} 
                        style = {styles.button}
                    />
                    
                    <RaisedButton 
                        label = "Continuer"
                        primary={true}
                        onClick={this.continue}
                        style = {styles.button}
                    />


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
export default ClientForm; 


import React, { Component } from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'; 
import TextField from 'material-ui/TextField'; 
import RaisedButton from 'material-ui/RaisedButton'; 

export class VehiculeForm extends Component {
    continue = e =>{
        e.preventDefault(); 
        this.props.nextStep(); 
    }
    back = e =>{
        e.preventDefault(); 
        this.props.prevStep(); 
    }
    render() {
        const {values, handleChange} = this.props; 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Information sur votre Vehicule" />
                    <TextField 
                        hintText="La marque du vehicule"
                        floatingLabelText="Marque"
                        onChange = {handleChange('marque')}
                        defaultValue={values.marque} 
                    />
                    <br />
                    <TextField 
                        hintText="Numéro de plaque "
                        floatingLabelText="CNI"
                        onChange = {handleChange('cni')}
                        defaultValue={values.cni} 
                    />
                    <br />
                    <TextField 
                        hintText="Dommage causée"
                        floatingLabelText=""
                        onChange = {handleChange('dommagecause')}
                        multiLine
                        rowsMax={5}
                        defaultValue={values.dommagecause}
                        
                    />
                    <br />
                    <TextField 
                        hintText="00000 "
                        floatingLabelText="Votre estimation des dommages "
                        onChange = {handleChange('estdommage')}
                        defaultValue={values.estdommage} 
                    />
                    <br />
                    <RaisedButton 
                        label = "Continuer"
                        primary={true}
                        style = {styles.button}
                        onClick={this.continue}
                    />    
                    <RaisedButton 
                        label = "Retour"
                        primary={false}
                        style = {styles.button}
                        onClick={this.back}
                    />


                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin:15
    }
}
export default VehiculeForm; 


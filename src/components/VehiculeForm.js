import React, { Component } from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'; 
import TextField from 'material-ui/TextField'; 
import RaisedButton from 'material-ui/RaisedButton'; 
import MainFeaturedPost from './MainFeaturedPost';

const mainFeaturedPost = {
    title: "ENREGISTREMENT DE SINISTRE D'AXA", 
    description: "Ce système vous permettras d'enregistrer les informations du Sinistre sans vous déplacer. vous Serez Ensuite contacter par nos agents pour le suivis. ", 
    image: "https://www.usinenouvelle.com/mediatheque/0/8/5/000797580_896x598_c.png", 
    imgText: "main image Description"

}
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
                    <MainFeaturedPost post={mainFeaturedPost} />
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


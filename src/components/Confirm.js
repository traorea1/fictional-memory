import React, { Component } from 'react'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'; 
import RaisedButton from 'material-ui/RaisedButton'; 
import {List, ListItem} from 'material-ui/List';  

export class Confirm extends Component {
    continue = e =>{
        e.preventDefault(); 
        window.print(); 
        this.props.nextStep(); 
    }
    back = e =>{
        e.preventDefault(); 
        this.props.prevStep(); 
    }
    render() {
        const {values:{ 
            title, prenom, nom, rue, numrue, numpost, npa, localite, pays, numtel, email,
            type,quepassa, nclient, blesse, typeblessure, nbless, quiconduit, autvehic, date_sinistre, localit, ruesinistre, payssinistre,
            reponsable, codepolice, expliquer,marque, cni, dommagecause, estdommage
        }} = this.props; 
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirmer les Informations" />
                    <List>
                        <ListItem primaryText="Titre" secondaryText={title}/>
                        <ListItem primaryText="Prenom" secondaryText={prenom}/>
                        <ListItem primaryText="Nom" secondaryText={nom}/>
                        <ListItem primaryText="Rue" secondaryText={rue}/>
                        <ListItem primaryText="Numero de rue" secondaryText={numrue}/>
                        <ListItem primaryText="Numero Postale" secondaryText={numpost}/>
                        <ListItem primaryText="NPA" secondaryText={npa}/>
                        <ListItem primaryText="Localite du Client" secondaryText={localite}/>
                        <ListItem primaryText="Pays du client" secondaryText={pays}/>
                        <ListItem primaryText="Numero de Telephone du client" secondaryText={numtel}/>
                        <ListItem primaryText="Email du Client" secondaryText={email}/>
                        <ListItem primaryText="Type de Sinistre" secondaryText={type}/>
                        <ListItem primaryText="Qu'est ce qui c'est passé" secondaryText={quepassa}/>
                        <ListItem primaryText="date du Sinistre" secondaryText={date_sinistre}/>
                        <ListItem primaryText="Immatriculation du vehicule" secondaryText={cni}/>
                        <ListItem primaryText="Dommage cause" secondaryText={dommagecause}/>
                        <ListItem primaryText="Votre estimation des dommage" secondaryText={estdommage}/>

                    </List>
                    <RaisedButton 
                        label = "Imprimer & Continuer"
                        primary={true}
                        style = {StyleSheet.button}
                        onClick={this.continue}
                        style = {styles.button}
                    />
                    <RaisedButton 
                        label = "Retour"
                        primary={false}
                        onClick={this.back}
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
export default Confirm; 


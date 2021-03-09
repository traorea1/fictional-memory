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
                    <MainFeaturedPost post={mainFeaturedPost} />
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
                    <br />
                    <br />
                    <br />
                    <div className ="container-bold"> 
                        <p>Cette Application fut créer dans le cadre d'un projet scolaire par</p>
                        <ul>
                            <li>TRAORE Abdoul Karim</li>
                            <li>EL OUMGHARI Ikrame</li>
                            <li>DIALLO MOUHAMMED ABoudrahmane</li>
                        </ul>
                        <p>Ainsi, cette Application n'engage en rien AXA</p>
                    </div>
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


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
export class SinistreForm extends Component {
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
                    <AppBar title = "Information sur le Sinistre" />
                    <TextField 
                        hintText="Le type de Sinistre"
                        floatingLabelText="Type de Sinistre"
                        onChange = {handleChange('type')}
                        defaultValue={values.type} 
                        style = {styles.button}
                    />
                    <TextField 
                        required
                        hintText="Que c'est il passé? "
                        floatingLabelText="Que Passa"
                        multiLine 
                        rowsMax = {5}
                        onChange = {handleChange('quepassa')}
                        defaultValue={values.quepassa} 
                        style = {styles.button}
                    />
                    <TextField 
                        hintText="Votre Numéro client"
                        floatingLabelText="nclient"
                        onChange = {handleChange('nclient')}
                        defaultValue={values.nclient}
                        style = {styles.button} 
                    />
                    <br />
                    <TextField 
                        hintText="Y'a t'il des blessées? "
                        floatingLabelText="blesse"
                        onChange = {handleChange('blesse')}
                        defaultValue={values.blesse} 
                        style = {styles.button}
                    />
                    
                    <TextField 
                        hintText="Blessure grave ou legère?"
                        floatingLabelText="Type de Blessure"
                        onChange = {handleChange('typeblessure')}
                        defaultValue={values.typeblessure} 
                        style = {styles.button}
                    />
        
                    <TextField 
                        hintText="Nombre de Blessé"
                        floatingLabelText="Blessé(s)"
                        onChange = {handleChange('nbless')}
                        defaultValue={values.nbless} 
                        style = {styles.button}
                    />
                    <br />
                    <TextField 
                        hintText="Vous ou quelqu'un d'autre?"
                        floatingLabelText="Qui conduisait? "
                        onChange = {handleChange('quiconduit')}
                        defaultValue={values.quiconduit} 
                        style = {styles.button}
                    />
                    
                    <TextField 
                        hintText="Nombre d'autres Vehicule Impliqués"
                        floatingLabelText="Autres vehicules Impliqué"
                        onChange = {handleChange('autvehic')}
                        defaultValue={values.autvehic}
                        style = {styles.button}
                    />
                    
                    <TextField 
                        type="date"
                        floatingLabelText="Date du Sinistre"
                        onChange = {handleChange('date_sinistre')}
                        defaultValue={values.date_sinistre} 
                        style = {styles.button}
                    />
                    <br />
                    <TextField 
                        hintText="Localité"
                        floatingLabelText="Où eu lieu le sinistre"
                        onChange = {handleChange('localit')}
                        defaultValue={values.localit} 
                        style = {styles.button}
                    />
                
                    <TextField 
                        hintText="Rue du siniste"
                        floatingLabelText="Rue"
                        onChange = {handleChange('ruesinistre')}
                        defaultValue={values.ruesinistre} 
                        style = {styles.button}
                    />
                    
                    <TextField 
                        hintText="Pays du Sinistre"
                        floatingLabelText="Pays"
                        onChange = {handleChange('payssinistre')}
                        defaultValue={values.payssinistre} 
                        style = {styles.button}
                    />
                    <br /> 
                    <TextField 
                        hintText="Qui est le responsable?"
                        floatingLabelText="Responsable"
                        onChange = {handleChange('reponsable')}
                        defaultValue={values.reponsable} 
                        style = {styles.button}
                    />
                     
                    <TextField 
                        hintText="code de la Police ayant fait le costat"
                        floatingLabelText="Code Police"
                        onChange = {handleChange('codepolice')}
                        defaultValue={values.codepolice} 
                        style = {styles.button}
                    />
                    
                    <TextField 
                        hintText="Expliquer nous tous !"
                        floatingLabelText="Votre explication"
                        onChange = {handleChange('expliquer')}
                        defaultValue={values.expliquer} 
                        style = {styles.button}
                        multiLine
                        rowsMax = {5}
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
export default SinistreForm; 


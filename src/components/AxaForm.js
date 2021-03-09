import React, { Component } from 'react'; 
import ClientForm from './ClientForm'; 
import Confirm from './Confirm'; 
import VehiculeForm from './VehiculeForm';
import SinistreForm from './SinsitreForm'; 
import Success from './Success'; 


export class AxaForm extends Component {
    // initiate all the components. 
    state = {
        // client variable
        step: 1, title: '', prenom: '', nom: '', rue: '', numrue: '', numpost: '', npa: '', localite: '', pays: '', numtel: '', email: '',
        type: '',quepassa: '',
        // sinistre variable
        nclient: '', blesse: '', typeblessure: '', nbless: '', quiconduit: '', autvehic: '', date_sinistre: '', localit: '', ruesinistre: '', payssinistre: '',
        reponsable: '',codepolice: '',expliquer: '',
        // vehicule variable 
        marque: '', cni: '', dommagecause: '', estdommage: ''
    }; 
    // proceed to next page 
    nextStep = () => {
        const {step} = this.state; 
        this.setState({
            step: step+1
        });
    }; 
    // go back to prev step 
    prevStep = () =>{
        const {step} = this.state; 
        this.setState({
            step: step -1
        });
    }; 
    // handle fields change 
    handleChange = input => e => {
        this.setState({[input]: e.target.value}); 
    }; 
    render() { 
        const {step} = this.state; 
        
        const {title, prenom, nom, rue, numrue, numpost, npa, localite, pays, numtel, email,
        type,quepassa, nclient, blesse, typeblessure, nbless, quiconduit, autvehic, date_sinistre, localit, ruesinistre, payssinistre,
        reponsable, codepolice, expliquer,marque, cni, dommagecause, estdommage} = this.state;

        const values = {title, prenom, nom, rue, numrue, numpost, npa, localite, pays, numtel, email,
            type,quepassa, nclient, blesse, typeblessure, nbless, quiconduit, autvehic, date_sinistre, localit, ruesinistre, payssinistre,
            reponsable, codepolice, expliquer,marque, cni, dommagecause, estdommage};  
        
        switch(step){
            case 1: 
                return (
                    <ClientForm 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values = {values}
                    />
                ); 
            case 2: 
                return (
                    <VehiculeForm 
                    nextStep={this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange={this.handleChange}
                    values = {values}
                />
                ); 
            case 3: 
                return (
                    <SinistreForm
                        nextStep={this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange={this.handleChange}
                        values = {values}
                    />
                ); 
            case 4: 
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}  
                    />

                ); 
            case 5: 
                return (
                    <Success 
                        values= {values}
                    />
                ); 
        }
    }
}

export default AxaForm;  


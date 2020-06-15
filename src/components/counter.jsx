import React, { Component } from 'react';
import './../index.css';

class Hello extends Component {
    state = {
        pis: <h1>Bezuzyteczny Tekst</h1>,
        po: <h1>UselessTekst</h1>,
    };

    render() { 
        return ( 
            <React.Fragment>
                <img id="HelloWorld" width="100%" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/46b79178569835.5cb1e08f4a04e.gif" alt="error: could not load an image" />
                <div id="tekst">{this.state.pis}</div>
                <button id="button" onClick={this.uselessFunction}>Useless button</button>
            </React.Fragment>
            
         );
    }

    uselessFunction(){
        
        if(document.getElementById("tekst").innerHTML == "<h1>Bezuzyteczny Tekst</h1>"){
            document.getElementById("tekst").innerHTML = "<h1>UselessTekst</h1>";
        }
        else{
            console.log("nie");
            document.getElementById("tekst").innerHTML = "<h1>Bezuzyteczny Tekst</h1>";
        }
        
    }


}
 
export default Hello;
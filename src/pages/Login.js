
import React, {Component} from 'react';
import twitterLogo from '../twitter.svg';
import './Login.css'

export default class Login extends Component{

    render(){
        return(

            <div className="login-wrapper">
            <img src={twitterLogo} alt="GoTwitter"/>
            <form>
            <input
                placeholder="Nome do usuario"
            />
            <button type="submit">Entrar</button>
            </form>
            </div>
        ) ;
        

    }
}

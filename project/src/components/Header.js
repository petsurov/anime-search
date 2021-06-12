import React, {Component} from 'react';
import {texts} from './texts';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {selectedLang:localStorage.getItem("lang")}
        this.change = this.change.bind(this)
    }

    language(){
        this.props.setLanguage(localStorage.getItem("lang"))
    }

    change(option){
        localStorage.setItem('lang', option.target.value);
        //window.location.reload();

        this.props.setLanguage(localStorage.getItem("lang"));
        this.setState({selectedLang: option.target.value});
    }
    
    render(){
        const lang = localStorage.getItem('lang') || 'en';
        return (
            <header>
                <h1>{texts[this.state.selectedLang]["h1"]}<strong>{texts[this.state.selectedLang]["strong"]}</strong></h1>
                <select id="selectLanguage" onChange={this.change} value={lang}>
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                    <option value="ee">Eesti</option>
                </select>
            </header>
        )
    }  
}


export default Header;
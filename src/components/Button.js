import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Button extends Component {
  // hooking up context with component
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : '輸入';
    return <button className="ui button primary">{text}</button>
  }
}

export default Button;

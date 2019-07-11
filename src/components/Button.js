import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Button extends Component {
  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'Submit' : '輸入'}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button;

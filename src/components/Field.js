import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : '姓名';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input type="text" />
      </div>
    )
  }
}

export default Field;

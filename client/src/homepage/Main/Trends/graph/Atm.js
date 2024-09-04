import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

class PaymentForm extends Component {
  state = {
    cvc: '123',
    expiry: '12/23',
    focus: '',
    name: 'Nidun',
    number: '4111 1111 1111 1111',
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
      </div>
    );
  }
}

export default PaymentForm;

import React, { Component } from 'react';
import Header from './header/header.component';
import { Wheel } from 'react-custom-roulette';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'chris'
    }
  }
  render() {
    const data = [
      { option: 'Chris'},
      { option: 'Shawn'},
      { option: 'Neilson'},
      { option: 'Jen'},
      { option: 'Laura'},
      { option: 'Alek'},
      { option: 'Vicky'},
      { option: 'Jerrycka'}
    ]
    return (
      <div>
      <Header />
        <Wheel
          mustStartSpinning={true}
          prizeNumber={6}
          innerRadius={10}
          data={data}
          textColors={['black']}
        />
      </div>
    )
  }
}

export default App;

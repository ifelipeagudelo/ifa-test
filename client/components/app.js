import React, { Component } from 'react';
import '../css/app.css'

import Header from './header'
import Invoice from './invoice'
import Overview from './overview'
import Tabs from './tabs'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { invoiceData: [] };
  }

  componentDidMount() {
    fetch('/data')
      .then(response => response.json())
      .then(data => this.setState({ invoiceData: data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Invoice data={this.state.invoiceData} />
        <Tabs />
        <Overview data={this.state.invoiceData} />
      </div>
    );
  }
}
export default App;
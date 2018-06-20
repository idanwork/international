import React, { Component } from 'react';
import './App.css';
import Country from './country';
import International from './international';

class App extends Component {
  constructor(){
    super();
    this.state = {selectedIndex: -1};
  }

  data = [
    { "flag": "https://restcountries.eu/data/bdi.svg", "name": "Burundi" },
    { "flag": "https://restcountries.eu/data/chl.svg", "name": "Chile" },
    { "flag": "https://restcountries.eu/data/chn.svg", "name": "China" },
    { "flag": "https://restcountries.eu/data/col.svg", "name": "Colombia" },
    { "flag": "https://restcountries.eu/data/geo.svg", "name": "Georgia" },
    { "flag": "https://restcountries.eu/data/deu.svg", "name": "Germany" },
    { "flag": "https://restcountries.eu/data/gib.svg", "name": "Gibraltar" },
    { "flag": "https://restcountries.eu/data/grc.svg", "name": "Greece" },
    { "flag": "https://restcountries.eu/data/hkg.svg", "name": "Hong Kong" },
    { "flag": "https://restcountries.eu/data/isl.svg", "name": "Iceland" },
    { "flag": "https://restcountries.eu/data/ind.svg", "name": "India" },
    { "flag": "https://restcountries.eu/data/irl.svg", "name": "Ireland" },
    { "flag": "https://restcountries.eu/data/isr.svg", "name": "Israel" }
  ];

  render() {
    let innerComponent = null;

    if (this.state.selectedIndex === this.data.length){
      innerComponent = <International/>;
    }
    else if (this.state.selectedIndex >= 0){
      let c = this.data[this.state.selectedIndex];

      innerComponent = <Country name={c.name} flagUri={c.flag} />;
    }
    
    return (
      <div className="App">
        <div className="Buttons">
          {this.data.map((i, index) => <input key={`btn_${index}`} type="button" value={i.name}
            onClick={e => this.onCountryClick(index)} />)}
            <input type="button" value="international" onClick={e => this.onInternationalClick(e)}/>
        </div>
       <hr/>
        {innerComponent}
      </div>
    );
  }

  onInternationalClick(e){
    console.info("clicked on international");
    this.onCountryClick(this.data.length);
  }

  onCountryClick(index) {
    window.confirm("Are you sure?");
    this.setState({ selectedIndex: index });

  }

}

export default App;

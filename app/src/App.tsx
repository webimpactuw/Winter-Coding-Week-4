import React from 'react';
import './App.css';
import nameFile from './names.txt'

interface AppState {
  names: any[];
}

class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      names: []
    }
  }

  componentDidMount() {
    fetch(nameFile)
      .then(resp => resp.text())
      .then(text => {
        let arr = text.trim().split('\n');
        arr = arr.filter(function(entry) { return entry.trim() !== ''; });
        let allNames = arr.map((name) => 
          <p key={name}>{name}</p>
        );
        this.setState({ names: allNames });
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.names}
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import { askForPermissioToReceiveNotifications } from './push-notification'

class App extends Component {
  render() {
    return (
      <div className="App">
          <button onClick={askForPermissioToReceiveNotifications}>
            Dar permissão
          </button>
      </div>
    );
  }
}

export default App;

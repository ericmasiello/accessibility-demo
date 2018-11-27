import React, { Component } from 'react';
import queryString from 'query-string';
import classNames from 'classnames';
import Tabs from './Tabs';
import './App.css';

class App extends Component {
  state = {
    overlay: queryString.parse(window.location.search).overlay !== 'false',
  };
  render() {
    const classes = [
      'App',
      {
        'App--overlay': this.state.overlay,
      },
    ];
    return (
      <div className={classNames(classes)}>
        <Tabs />
        {this.state.overlay && (
          <div className="overlay">
            <button
              className="overlay__button"
              onClick={() =>
                this.setState({
                  overlay: false,
                })
              }
            >
              Reveal
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;

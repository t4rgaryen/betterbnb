import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App.jsx';

var Index = () => {
  return (
    <App />
  )
}


ReactDOM.render(<Index />, document.getElementById('app'))
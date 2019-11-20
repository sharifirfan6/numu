import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App1 extends Component 
{
 constructor(props)
 {
 	super(props);
 	this.state = 
 	{
 	}
 }

 componentDidMount()
 {
 }

componentWillUnmount()
 {
	 localStorage.setItem('display', '');
 }

 render()
 { 

	  return (
	    <div className="App">
	      <header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />
	        <p>Name: {localStorage.getItem('name')}</p>
	        <p>ID: {localStorage.getItem('id')}</p>
	        <p>Flight: {localStorage.getItem('flight')}</p>
	        <p>Year: {localStorage.getItem('year')}</p>
	      </header>
	    </div>
	 		 );
  }
}

export default App1;

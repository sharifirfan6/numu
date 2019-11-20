import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import App1 from './App1.js';
import App2 from './App2.js';


class App extends Component 
{
 constructor(props)
 {
 	super(props);
 	this.state = 
 	{
 		launches: [{flight_number: '', mission_name: ''}],
 		rockets: [{rocket_name: '', rocket_type: ''}],
 		displays: ''
 	}
 }

 componentDidMount()
 {
 	fetch('https://api.spacexdata.com/v3/launches/upcoming')
      .then(response => response.json())
      .then(data => this.setState({launches: data}));

    fetch('https://api.spacexdata.com/v3/rockets')
      .then(response => response.json())
      .then(data => this.setState({rockets: data}));

      this.setState({displays: localStorage.getItem('display')});
 }

 locals = (a, b, c, d, e) =>
 {
 	localStorage.setItem('name', a);
 	localStorage.setItem('id', b);
 	localStorage.setItem('flight', c);
 	localStorage.setItem('year', d);
 }

 localsA = (a, b, c, d, e) =>
 {
 	localStorage.setItem('name', a);
 	localStorage.setItem('id', b);
 	localStorage.setItem('company', c);
 	localStorage.setItem('country', d);
 }

 render()
 { 
  const a = this.state.launches;	
  const b = this.state.rockets;	

	  return (
	  	<Router>
	  	<Switch>
	      <Route path='/app1' component={App1}/>
	      <Route path='/app2' component={App2}/>
	    </Switch>


	    <div className="App">
	      	<div style = {{width: '50%', backgroundColor: 'lightblue', float: 'left', textAlign: 'left', height: '600px', display: this.state.displays}}>
	        <h1 style = {{marginLeft: '5.5%', textDecoration: 'underline'}}>Launches</h1>
	        <ul style={{listStyleType:"none"}}>
			    {a.map(item => (
			      <li key={item.flight_number}>
			        <Link to = '/app1' onClick={() => this.locals(item.mission_name, item.mission_id, item.flight_number, item.launch_year, 'none')}>{item.mission_name}</Link>
			      </li>
			    ))}
			</ul>
			</div>
			<div style = {{width: '50%', backgroundColor: 'lightgrey', float: 'left', textAlign: 'left', height: '600px', display: this.state.displays}}>
			<h1 style = {{marginLeft: '5.5%', textDecoration: 'underline'}}>Rockets</h1>
	        <ul style={{listStyleType:"none"}}>
			    {b.map(item => (
			      <li key={item.rocket_id}>
			        <Link to = '/app2' onClick={() => this.localsA(item.rocket_name, item.rocket_id, item.company, item.country, 'none')}>{item.rocket_name}</Link>
			      </li>
			    ))}
			</ul>
			</div>
	    </div>
	    </Router>
	 		 );
  }
}

export default App;

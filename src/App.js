import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Toolbar from './components/Toolbar/Toolbar'
import Tasks from './containers/Tasks/Tasks'
import NewTask from './containers/NewTask/NewTask'


class App extends Component {
	state = {
		activeNavItem: ''
	}

	switchNavPage = (item) => {
		this.setState({activeNavItem: item})
	}

	componentDidMount() {
		const pathname = window.location.pathname.substr(1)
		if (pathname.length > 0)
			this.setState({activeNavItem: pathname})
		else 
			this.setState({activeNavItem: 'home'})
	}

	render() {
		return (
			<div className="App">
				<Toolbar activeItem={this.state.activeNavItem} changedPage={this.switchNavPage} />
				<Switch>
					<Route path='/new' component={NewTask} />
					<Route exact path='/' component={Tasks} />
				</Switch>
			</div>
		);
	}

}

export default App;

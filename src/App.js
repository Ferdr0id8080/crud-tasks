import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Toolbar from './components/Toolbar/Toolbar'
import Tasks from './containers/Tasks/Tasks'
import NewTask from './containers/NewTask/NewTask'


const app = () => {
	return (
		<div className="App">
			<Toolbar />
			<Switch>
				<Route path='/new' component={NewTask} />
                <Route exact path='/' component={Tasks} />
			</Switch>
		</div>
	);
}

export default app;

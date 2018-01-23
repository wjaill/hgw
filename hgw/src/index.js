//路由
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss'; 
import App from './javascripts/App';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,IndexRedirect,hashHistory, Redirect} from 'react-router'


import Home from "./javascripts/hgw/home/Home";
import Find from "./javascripts/hgw/find/Find.js";
import Type from "./javascripts/hgw/type/Type";
import Mine from "./javascripts/hgw/mine/Mine";



let routes = <Router history={hashHistory}>
		<Route path="/" component={App}>
		<IndexRedirect to="home"/>
		<Route path="home" component={Home}/>
		<Route path="find" component={Find}/>
		<Route path="type" component={Type}/>	
		<Route path="mine" component={Mine}/>					
		<Redirect from="*" to="home"/>
	</Route>
</Router>

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();

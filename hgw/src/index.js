//路由
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss'; 
import App from './javascripts/App';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,IndexRedirect,hashHistory, Redirect} from 'react-router'


import Home from "./javascripts/hgw/home/Home"
import Find from "./javascripts/hgw/find/Find"
import Type from "./javascripts/hgw/type/Type"
import Mine from "./javascripts/hgw/mine/Mine"
import Details from "./javascripts/hgw/details/Details"
import DetailD from "./javascripts/hgw/details/DetailD"
import Evaluate from "./javascripts/hgw/details/Evaluate"

import {Provider} from 'react-redux'
import store from './redux/store'

let routes = <Provider store={store}><Router history={hashHistory}>
		<Route path="/" component={App}>
		<IndexRedirect to="home"/>
		<Route path="home" component={Home}/>
		<Route path="find" component={Find}/> 
		<Route path="type" component={Type}/>	
		<Route path="mine" component={Mine}/>
		<Router path="details/:id" component={Details}/>
		<Router path="detaild/:id" component={DetailD}/>
		<Router path="evaluate/:id" component={Evaluate}/>		
		<Redirect from="*" to="home"/>
	</Route>
</Router></Provider>

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();

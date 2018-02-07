//路由
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss'; 
import App from './javascripts/App';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,IndexRedirect,hashHistory, Redirect} from 'react-router'
//react-redux
import {Provider} from 'react-redux'
import store from './redux/store'
//这是一级路由
import Home from "./javascripts/hgw/home/Home";
import Find from "./javascripts/hgw/find/Find.js";
import Type from "./javascripts/hgw/type/Type.js";
import Mine from "./javascripts/hgw/mine/Mine";
//这是类目页的二级路由
import TypeClassify from "./javascripts/hgw/type/type-classify";
import TypeList from "./javascripts/hgw/type/type-list";
import TypeSearch from "./javascripts/hgw/type/type-search";
//这是我的页的二级路由
import Login from "./javascripts/hgw/mine/login";
import Register from "./javascripts/hgw/mine/register";
import Personal from "./javascripts/hgw/mine/personal";


let routes = <Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={App}>
		<IndexRedirect to="home"/>
		<Route path="home" component={Home}/>
		<Route path="find" component={Find}/>
		<Route path="type" component={Type}>
			<IndexRedirect to="type-classify"/>
			<Route path="type-classify" component={TypeClassify}/>
			<Route path="type-list" component={TypeList}/>
			<Route path="type-search" component={TypeSearch}/>
		</Route>
		<Route path="mine" component={Mine}>
			<IndexRedirect to="personal"/>
			<Route path="personal" component={Personal}/>
			<Route path="login" component={Login}/>
			<Route path="register" component={Register}/>
		</Route>
		<Redirect from="*" to="home"/>
	</Route>
</Router>
</Provider>

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();

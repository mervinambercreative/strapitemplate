import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
//import 'gestalt/dist/gestalt.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import Aboutus from './components/Aboutus';

import registerServiceWorker from './registerServiceWorker'; 

const Root = ({data}) => (
    <Router>
        <React.Fragment>
            <Switch>
                <Route component={App} exact path="/"  />
                <Route component={Aboutus} path="/aboutus"  />
            </Switch>
        </React.Fragment>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import ContactList from './components/contact/ContactList';
import AddContact from './components/contact/AddContact';
import AboutPage from './components/page/AboutPage';
import { Provider } from './context';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path='/' component={ContactList} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact/add' component={AddContact} />
              </Switch>

            </div>
          </div>
        </Router>

      </Provider>

    );
  }
}

export default App;

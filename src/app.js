/*
Copyright 2017 Nirmal Kumar
This file is part of joyread.
joyread is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
joyread is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License
along with joyread.  If not, see <http://www.gnu.org/licenses/>.
*/

// built-in libraries
import React from 'react';
import {Route, Switch} from 'react-router-dom';

// custom libraries
import './css/styles.css';
import Home from './home.js';
import SignIn from './signin.js';
import SignUp from './signup.js';

const API = {
  root: '/',
  signIn: '/signin',
  signUp: '/signup',
  books: '/books'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'signin'
    };

    this.changeCurrentPage = this.changeCurrentPage.bind(this);
  };

  changeCurrentPage(currentPage) {
    this.setState({ currentPage });
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Home currentPage={this.state.currentPage} api={API} />} />
          <Route path="/signin" render={() => <SignIn changeCurrentPage={this.changeCurrentPage} api={API} />} />
          <Route path="/signup" render={() => <SignUp changeCurrentPage={this.changeCurrentPage} api={API} />} />
        </Switch>
      </div>
    );
  };
};

export default App;
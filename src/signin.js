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
import {Redirect} from 'react-router-dom';

// custom libraries
import Header from './header.js';
import Footer from './footer.js';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };

    this.authenticate = this.authenticate.bind(this);
  };

  authenticate() {
    this.setState({ isAuthenticated: true });
    this.props.changeCurrentPage('home');
  };

  render() {
    if (this.state.isAuthenticated === false) {
      return (
        <div className="container__inner">
          <Header currentNavLink={'signin'} />
          <div className="page-content">
            <div className="onboard-form">
              <label>Sign in</label>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="button" value="Submit" onClick={this.authenticate} />
            </div>
          </div>
          <Footer />
        </div>
      );
    };
    
    return <Redirect to="/" />;
  };
};

export default SignIn;
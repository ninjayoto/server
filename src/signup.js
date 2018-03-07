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

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnboarded: false
    };

    this.onboard = this.onboard.bind(this);
  };

  onboard() {
    this.setState({ isOnboarded: true });
    this.props.changeCurrentPage('home');
  };

  render() {
    if (this.state.isOnboarded === false) {
      return (
        <div className="container__inner">
          <Header currentNavLink={'signup'} />
          <div className="page-content">
            <div className="onboard-form">
              <label>Sign up</label>
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="button" value="Submit" onClick={this.onboard} />
            </div>
          </div>
          <Footer />
        </div>
      );
    };
    
    return <Redirect to="/" />;
  };
};

export default SignUp;
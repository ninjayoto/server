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

// vendor libraries
import axios from 'axios';

// custom libraries
import Header from './header.js';
import Footer from './footer.js';
import CurrentlyReading from './currently_reading.js';
import Books from './books.js';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      booksArr: []
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: this.props.api.books,
    })
    .then(res => {
      const booksArr = res.data.books;
      this.setState({booksArr});
    });
  }

  render() {
    if (this.props.currentPage === 'signin') {
      return <Redirect to="/signin" />;
    } else if (this.props.currentPage === 'signup') {
      return <Redirect to="/signup" />;
    } else {
      return (
        <div className="container__inner">
          <Header currentNavLink={'home'} />
          <div className="page-content">
            <CurrentlyReading books={this.state.booksArr} />
            <Books books={this.state.booksArr} />
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default Home;
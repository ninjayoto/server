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

function Books(props) {
  const booksList = props.books.map((book) =>
    <li key={book.src}>
      <a href={book.href}>
        <img src={require('../uploads/img/' + book.src)} alt={book.alt} />
      </a>
    </li>
  );

  return (
    <div className="currently-reading__books">
      <ul>
        {booksList}
      </ul>
    </div>
  );
}

const Header = () => (
  <div className="currently-reading__header">
    <div className="title">Currently reading</div>
    <div className="nav">
      <a href="" className="left">
        <svg width="28" height="20" viewBox="0 0 33 20" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#676767" strokeWidth="3" fill="none" fillRule="evenodd">
            <path d="M33 10.143H3"></path>
            <path strokeLinecap="square" d="M10.143 17.286L3 10.143 10.143 3"></path>
          </g>
        </svg>
      </a>
      <a href="" className="right">
        <svg width="28" height="20" viewBox="0 0 33 20" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#676767" strokeWidth="3" fill="none" fillRule="evenodd">
            <path d="M0 10.143h30"></path>
            <path strokeLinecap="square" d="M22.857 3L30 10.143l-7.143 7.143"></path>
          </g>
        </svg>
      </a>
    </div>
  </div>
);

function CurrentlyReading(props) {
  return (
    <div className="currently-reading">
      <Header />
      <Books books={props.books}/>
    </div>
  );
}

export default CurrentlyReading;
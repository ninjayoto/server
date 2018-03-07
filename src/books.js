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
    <div className="books">
      <ul>
        {booksList}
      </ul>
    </div>
  );
}

export default Books;
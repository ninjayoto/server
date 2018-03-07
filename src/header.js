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
import {Link} from 'react-router-dom';

const MenuDropdown = () => (
  <div className="header__menu-dropdown">
    <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="17" height="17">
        <g className="nc-icon-wrapper" fill="#676767">
          <path d="M18 43V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v38h16zM9 16a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V16z"></path>
          <path data-color="color-2" d="M2 45v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V45H2z"></path>
          <path d="M37 43V5a1 1 0 0 0-1-1H22a1 1 0 0 0-1 1v38h16zm-9-27a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V16z"></path>
          <path data-color="color-2" d="M21 45v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V45H21z"></path>
          <path d="M57.941 40.48L50.728 3.171a.998.998 0 0 0-1.172-.792L35.81 5.037a1 1 0 0 0-.792 1.171l7.214 37.31 15.709-3.038zm-13.17-25.972a.998.998 0 0 1 1.172.792l2.278 11.782a1 1 0 0 1-1.964.379l-2.278-11.782a1 1 0 0 1 .792-1.171z"></path><path data-color="color-2" d="M42.611 45.481l3.037 15.709a1.001 1.001 0 0 0 1.172.791l13.746-2.657a1 1 0 0 0 .792-1.171l-3.037-15.71-15.71 3.038z"></path>
        </g>
      </svg>
      <label>Add new books</label>
    </a>
    <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="17" height="17">
        <g className="nc-icon-wrapper" fill="#676767">
          <path d="M61 29V2c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v27h58zM48 7h4v16h-4V7zm-7 0h4v16h-4V7zm-7 0h4v16h-4V7zM14 19h16v4H14v-4z"></path>
          <path data-color="color-2" d="M3 31v27c0 .6.4 1 1 1h5v3c0 .6.4 1 1 1s1-.4 1-1v-3h42v3c0 .6.4 1 1 1s1-.4 1-1v-3h5c.6 0 1-.4 1-1V31H3zm13 22h-4V37h4v16zm7 0h-4V37h4v16zm7 0h-4V37h4v16zm20 0H34v-4h16v4z"></path>
        </g>
      </svg>
      <label>Collections</label>
    </a>
    <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 42 42">
        <path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3a14.8 14.8 0 0 0-3.38 1.97L9.9 10.1a1 1 0 0 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3a14.8 14.8 0 0 0 3.38-1.97l4.98 2.01a1 1 0 0 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" className="nc-icon-wrapper" fill="#676767"></path>
      </svg>
      <label>Account settings</label>
    </a>
    <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 42 42">
        <path d="M26 6h-4v20h4V6zm9.67 4.33l-2.83 2.83C35.98 15.73 38 19.62 38 24c0 7.73-6.27 14-14 14s-14-6.27-14-14c0-4.38 2.02-8.27 5.16-10.84l-2.83-2.83C8.47 13.63 6 18.52 6 24c0 9.94 8.06 18 18 18s18-8.06 18-18c0-5.48-2.47-10.37-6.33-13.67z" className="nc-icon-wrapper" fill="#676767"></path>
      </svg>
      <label>Sign out</label>
    </a>
  </div>
);

const HomeNav = () => (
  <div className="header__nav">
    <a href="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" width="20" height="20">
        <g fill="#676767">
          <path d="M29.8 24.4S26 19.7 26 15v-4c0-5.5-4.5-10-10-10S6 5.5 6 11v4c0 4.7-3.7 9.3-3.8 9.4-.2.3-.3.7-.1 1.1.2.3.5.5.9.5h26c.4 0 .7-.2.9-.6.2-.3.1-.7-.1-1z"/>
          <path data-color="color-2" d="M12.1 28c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3h-7.8z"/>
        </g>
      </svg>
      <label>Notifications</label>
    </a>
    <a href="">
      <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="20" height="20">
        <g className="nc-icon-wrapper" fill="#676767">
          <path data-color="color-2" d="M60 27H4c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h56c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z"></path>
          <path d="M60 7H4c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h56c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1zm0 40H4c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h56c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z"></path>
        </g>
      </svg>
      <label>Menu</label>
    </a>
  </div>
);

function OnboardNav(props) {
  if (props.currentNavLink === 'signin') {
    return (
      <div className="header__nav">
        <Link to="/signup">Sign up</Link>
      </div>
    );
  } else {
    return (
      <div className="header__nav">
        <Link to="/signin">Sign in</Link>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    if (this.props.currentNavLink === 'home') {
      return (
        <div className="header">
          <input className="header__search-box" placeholder="Type here to search" type="text" />
          <a href="/" className="header__logo">joyread</a>
          <HomeNav />
          <MenuDropdown />
        </div>
      );
    } else {
      return (
        <div className="header">
          <a href="/" className="header__logo">joyread</a>
          <OnboardNav {...this.props} />
        </div>
      );
    }
  };
}

export default Header;
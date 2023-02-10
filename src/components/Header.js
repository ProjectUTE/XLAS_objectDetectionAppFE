import React, { useState, useContext, useMemo } from 'react';
import { BsGrid3X3GapFill, BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../context/ThemeContext';

const path = [
  {
    id: Math.random(),
    href: '#home',
    value: 'Home',
  },
  {
    id: Math.random(),
    href: '#demo',
    value: 'Demo',
  },
  {
    id: Math.random(),
    href: '#services',
    value: 'Explain',
  },
  {
    id: Math.random(),
    href: '#contact',
    value: 'Contact Us',
  },
];

function Header() {
  // theme = false => light mode
  // theme = true => dark mode
  const { theme, setTheme } = useContext(ThemeContext);
  const [href, setHref] = useState('#home');
  const [toggleNav, setToggleNav] = useState(false);
  const ToglleThemeButton = useMemo(
    () => (theme ? BsToggleOn : BsToggleOff),
    [theme]
  );

  function handleSetTheme() {
    setTheme(!theme);
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <NavLink
          to={`/`}
          exact={true}
          className="nav__logo"
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          OD
        </NavLink>
        <div
          className={`nav__menu ${toggleNav ? 'show-menu' : ''}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {path.map((item) => {
              return (
                <li
                  className="nav__item"
                  key={item.id}
                  onClick={() => setHref(item.href)}
                >
                  <a
                    href={item.href}
                    className={`nav__link ${
                      href === item.href ? 'active-link' : ''
                    }`}
                  >
                    {item.value}
                  </a>
                </li>
              );
            })}
            <ToglleThemeButton
              className="change-theme"
              id="theme-button"
              onClick={handleSetTheme}
            />
          </ul>
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <BsGrid3X3GapFill onClick={() => setToggleNav(!toggleNav)} />
        </div>
        <a href="#" className="button button__header">
          Get Started
        </a>
      </nav>
    </header>
  );
}

export default Header;

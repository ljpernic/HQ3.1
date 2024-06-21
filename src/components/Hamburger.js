import React, { useState } from 'react';

const Hamburger = ({ toggleMenu }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const handleToggle = () => {
    setHamburgerActive(prevState => {
      const newActiveState = !prevState;
      toggleMenu(newActiveState);
      return newActiveState;
    });
  };

  return (
    <button
      id="toggle-main-menu-mobile"
      className={`hamburger hamburger--slider ${hamburgerActive ? 'is-active' : ''}`}
      type="button"
      onClick={handleToggle}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
};

export default Hamburger;

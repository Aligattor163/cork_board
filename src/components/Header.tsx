import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="c-header">
      <div className="c-header__left">
        <div className="c-header__logo">CorkBoard</div>
      </div>

      <div className="c-header__right">
        <input className="c-header__search" placeholder="Search..." />
        <div className="c-header__avatar">A</div>
      </div>
    </header>
  )
}

export default Header

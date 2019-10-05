import React from 'react'

interface HeaderProps {
  title: string
}

function Header({ title }: HeaderProps) {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">
          {title}
        </a>
      </div>
    </nav>
  )
}

export default Header

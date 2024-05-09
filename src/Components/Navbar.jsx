import React from 'react'

const Navbar = ({todos}) => {
  return (
    <nav className="navbar bg-warning">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1 text-success fs-1">React Todo</span>
      <span className="navbar-brand mb-0 h1 text-danger fs-1"> {todos.length}: Tasks</span>
    </div>
  </nav>
  )
}

export default Navbar;
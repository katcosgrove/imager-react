import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
  render () {
    return (
      <header className="main-header">
      <h1>Welcome to Imagersite</h1>
      <p>Your token is {this.props.token}.</p>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/welcome/signup">Sign Up</Link></li>
            <li><Link to="/welcome/signin">Sign In</Link></li>
            <li><Link to="/library">Library</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

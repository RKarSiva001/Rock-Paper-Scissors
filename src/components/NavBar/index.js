import './index.css'

const NavBar = props => {
  const {score} = props

  return (
    <nav className="nav-bar-container">
      <h1>ROCK PAPER SCISSORS</h1>
      <p>Score:</p>
      <p className="scoreboard">{score}</p>
    </nav>
  )
}

export default NavBar

import React from 'react'

import {
  BrowserRouter as Router,
  Route, Link, Redirect, Switch
} from 'react-router-dom'

const Bozo = () => (
  <Router>
    <div>
      <h2>What kind of EDM do you like</h2>
      <ul>
        <li>
          <Link to='/progressive'>
            Progressive House
          </Link>
        </li>
        <li>
          <Link to='/deep'>
            Deep House
          </Link>
        </li>
        <li>
          <Link to='/breakbeat'>
            BreakBeat
          </Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path='/progressive/house' render={() => (
          <div>
            <h3>Progressive House - Again</h3>
            <p>
            Psychadelic at times
            </p>
          </div>
        )} />
        <Route path='/progressive' component={Progressive} />
        <Route path='/deep' component={Deep} />
        <Route path='/breakbeat' component={Breakbeat} />

        <Route exact path='/' render={() => (
          <h3>
          Funky Breaks
          </h3>
        )} />
        <Route render={({ location }) => (
          <div>
            <h3>Error</h3>
          </div>
        )} />
      </Switch>
    </div>
  </Router>
)

const Progressive = () => (
  <div>
    <h3>Progressive House</h3>
    <p>Progressive house is a style (subgenre) of house music.
      The progressive house style emerged in the early 1990s.
      It initially developed in the United Kingdom as a natural progression of American and European house music of the late 1980s.</p>
  </div>
)
const Deep = () => (
  <div>
    <h3>Deep House</h3>
    <p>A definition IF any: "Deep house is a style of house music which fuses elements of Chicago house,
        jazz-funk, and Detroit techno. Sonic qualities include slower bpm's,
        fewer vocals, darker emotions, jazz-influences, and dissonant melodies.</p>
  </div>
)

class Breakbeat extends React.Component {
  state = {
    counter: 3
  }

  componentDidMount () {
    this.interval = setInterval(() => (
      this.setState(prevState => {
        return {
          counter: prevState.counter - 1
        }
      }
      )), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div>
        <h3>Beats</h3>
        <p>Phat Funky</p>
        <p>Redirecting in {this.state.counter}...</p>
        {
          (this.state.counter < 1) ? (
            <Redirect to='/' />
          ) : null
        }
      </div>
    )
  }
}
export default Bozo

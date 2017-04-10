import { Component } from 'jumpsuit'

// Import Components
import Logo from '../components/Logo/Logo'
import Navigation from '../components/Navigation/Navigation'
import CoinProfile from '../components/CoinProfile/CoinProfile'

export default Component({
  render () {
    return (
      <div className='container'>
        <section className="sidebar">
            <Logo />
            <Navigation />
        </section>
        <section className="content">
            {this.props.children}
        </section>
      </div>
    )
  }
})

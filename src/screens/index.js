import { Component } from 'jumpsuit'

// Import Components
import Logo from '../components/Logo/Logo'
import Navigation from '../components/Navigation/Navigation'

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

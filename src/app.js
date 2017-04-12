import { Render, Router, Route, IndexRoute } from 'jumpsuit'

// State
import state from 'state/index'

// Containers
import App from 'screens/index'

// Views
import CoinProfile from 'components/CoinProfile/CoinProfile'
import Portfolio from 'components/Portfolio/Portfolio'
import Simulation from 'components/Simulation/Simulation'
import Settings from 'components/Settings/Settings'
import Reports from 'components/Reports/Reports'

Render(state, (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Portfolio} />
    </Route>
      <Route path='/profile/:coinSymbol' component={App}>
          <IndexRoute component={CoinProfile} />
      </Route>
    <Route path='/settings' component={App}>
      <IndexRoute component={Settings} />
    </Route>
    <Route path='/reports' component={App}>
      <IndexRoute component={Reports} />
    </Route>
      <Route path='/simulation' component={App}>
          <IndexRoute component={Simulation} />
      </Route>
  </Router>
));

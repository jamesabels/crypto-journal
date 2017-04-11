import { Render, Router, Route, IndexRoute } from 'jumpsuit'

// State
import state from 'state/index'

// Containers
import App from 'screens/index'

// Views
import CoinProfile from 'components/CoinProfile/CoinProfile'
import Portfolio from 'components/Portfolio/Portfolio'

Render(state, (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={Portfolio} />
    </Route>
      <Route path='/:coinSymbol' component={App}>
          <IndexRoute component={CoinProfile} />
      </Route>
  </Router>
));

import { Render, Router, Route, IndexRoute } from 'jumpsuit'
/* state */
import state from 'state/index'
/* screens */
import App from 'screens/index'
import CoinProfile from 'components/CoinProfile/CoinProfile'

Render(state, (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={CoinProfile} />
    </Route>
  </Router>
));

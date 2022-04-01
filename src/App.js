import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


import TemplateDefault from './templates/Default'
import Page from './templates/Page'

import Costumers from './pages/Costumers'
import Home from './pages/Home'

const App = () => {
  return (
      <Router>
        <TemplateDefault>
        <Route path="/costumers">
          <Page title="Clientes" Component={Costumers} />
          </Route>
          <Switch>
          <Route path="/">
          <Page title="" Component={Home} />
          </Route>
        </Switch>
        </TemplateDefault>
      </Router>
  )
}

export default App

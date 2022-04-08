import Header from './Header.js';
import Button from './Buttons.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Demo from './demo.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="maindiv">
        <Switch>
            <Route exact path="/">
              <Header />
              <Button />
              <Main />
              <Footer />
            </Route>

          <Route path="/demo">
            <Demo auth = {true} />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

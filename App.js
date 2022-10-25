import './stylesheet/App.css';
import './stylesheet/responsive.css';
import './stylesheet/form.css';
import Header from './MyComponents/Header';
import { Footer} from './MyComponents/footer';
import Home from './MyComponents/Home';
import Contactus from './MyComponents/Contactus';
import Patrika from './MyComponents/Patrika';
import About from './MyComponents/About';
import Donate from './MyComponents/Donate';
import Religious from './MyComponents/Religious';

 import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
;
function App() {
  return (
    <>
    <Router>
         <Header/>

         <Switch>
          <Route exact path="/Contactus">
          <Contactus />
          </Route> 

          <Route exact path="/Patrika">
            <Patrika />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Religious">
            <Religious />
          </Route>
          <Route exact path="/Donate">
            <Donate />
          </Route>
          <Route path="/">
         <Home />
          </Route>
         
         
        </Switch>
         <Footer />
         </Router>
    </>
  );
}

export default App;

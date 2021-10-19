import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notfound from './components/Notfound.js/Notfound';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Authprovider from './Context/Authprovider';
import Privateroute from './Privateroute/Privateroute';
import Details from './components/Details/Details';
import PatientsAndvisitors from './components/PatientsandVisitors/PatientsAndvisitors';
import Getacare from './components/GetaCare/Getacare';
function App() {

  return (
      <div className="container-fluid">
          <Authprovider>
              <Router>
                  <Header></Header>
                  <Switch>
                    <Route  exact path="/">
                      <Home></Home>
                    </Route>
                    <Route exact  path="/login">
                      <Login></Login>
                    </Route>
                    <Route exact path="/register">
                        <Register></Register>
                    </Route>
                    <Route exact path="/visitors">
                      <PatientsAndvisitors></PatientsAndvisitors>
                    </Route>
                    <Privateroute exact path="/getacare">
                        <Getacare></Getacare>
                    </Privateroute>
                    <Privateroute exact path="/details/:serviceID" >
                        <Details></Details>
                    </Privateroute>
                    <Route exact path="*">
                        <Notfound></Notfound>
                    </Route>
                  </Switch>
                  <Footer></Footer>
              </Router>
          </Authprovider>
      </div>
  );
}

export default App;

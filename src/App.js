import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Userdetails from './Components/Userdetails/Userdetails';
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path='/' component={Login} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/userdetails' component={Userdetails} />
      </Router>
    </div>
  );
}

export default App;

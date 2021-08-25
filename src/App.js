import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import 'tachyons';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AdminDb from './components/AdminDb';
function App() {
  return (
    <Router>
      <Route path='/' exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/admin' component={AdminDb} />
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import './LoginForm.css';
import { makeApiRequest } from './apiRequest';
import ProtectedComponent from './ProtectedComponent';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    makeApiRequest(username, password)
      .then((responseData) => {
        console.log('API Response:', responseData);
        if (responseData.success) {
          setIsAuthenticated(true);
        } else {
          console.error('Login failed:', responseData.message);
        }
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

  return (
    <Router>
      <Route path="/" exact>
        <div className="App">
          <div className="login-container">
            <h2>Login Form</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </Route>
      <PrivateRoute path="/protected" component={ProtectedComponent} />
    </Router>
  );
}

export default App;

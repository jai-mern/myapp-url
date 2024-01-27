import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconContext } from 'react-icons';
import { Chart } from 'react-chartjs-2';
import { Home, Login, Register, ForgotPassword, Dashboard } from './pages';
import { Header, Footer } from './components';
import './styles/main.css';
import './styles/components.css';
import './styles/pages.css';

// React Router DOM: For handling routing and navigation
// Axios: For making HTTP requests to your backend API
// React Icons: Provides a set of high-quality icons for your application
// Formik & Yup: For form management and validation
// React Toastify: To display user-friendly toast messages
// React Chart.js 2: For integrating charts and graphs into your application

// Make Axios use cookies by default
axios.defaults.withCredentials = true;

// Configure Chart.js defaults
Chart.defaults.plugins.legend.display = false;

const App = () => {
  return (
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <Router>
        <div className="app">
          {/* Header component */}
          <Header />

          {/* Main content area */}
          <div className="content">
            <Switch>
              {/* Define routes for different pages */}
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/dashboard" component={Dashboard} />
              {/* Add more routes as needed */}
            </Switch>
          </div>

          {/* Footer component */}
          <Footer />
        </div>
      </Router>
      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </IconContext.Provider>
  );
};

export default App;

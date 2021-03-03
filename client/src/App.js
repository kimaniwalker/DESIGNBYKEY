import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import About from './components/about';
import Banner from './components/banner';
import Contact from './components/contact';
import Header from './components/header';
import Portfolio from './components/portfolio';
import PortfolioItem from './components/portfolio-item';
import Reviews from './components/reviews';
import Aboutus from './screens/aboutUs';
import Contactus from './screens/contactUs';
import Home from './screens/home';
import Work from './screens/work';




export default function App() {

  const isAuthenticated = false

  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Aboutus} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/contact" component={Contactus} />
          <Route exact path="/work" component={Work} />
          
          {
            isAuthenticated ?
              <>
                {/* <Route path="/profile" component={Header} /> */}
                
              </> : <Redirect to="/" />
          }
          <Route render={() => <h1>404: page not found</h1>} />





        </Switch>
      </Fragment>
    </Router>
  );
}
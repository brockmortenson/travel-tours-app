import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import routes from './routes';
import store from './ducks/store';
import './App.css';

// currently not rendering footer due to issues with nodemailer

const App = () => {
  const [ profile, setProfile ] = useState(false);

  const update = () => {
      setProfile(store.getState().user.isLoggedIn)
  }

  return (
    <div className="App" onMouseMove={update}>
      <Header  />
      { profile ? <Footer email={profile} /> : null }
      {routes}
    </div>
  );
}

export default App;

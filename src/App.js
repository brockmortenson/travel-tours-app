import { useEffect } from 'react';
import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
import routes from './routes';
import './App.css';

// currently not rendering footer due to issues with nodemailer

const App = () => {

  useEffect(() => {
    document.title = 'GoTravel'
  });

  return (
    <div className="App">
      <Header />
      {/* <Footer /> */}
      {routes}
    </div>
  );
}

export default App;

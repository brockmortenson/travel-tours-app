import { useEffect } from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import './App.css';

const App = () => {

  useEffect(() => {
    document.title = 'GoTravel'
  });

  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;

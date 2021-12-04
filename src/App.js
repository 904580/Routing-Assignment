import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import PageRoute from './components/route/PageRoute';
import Home from './Home/Home';

const App = () => {
  return (

    <div className="App">

      <Router>
        <div>
          <Home />
          <Header />
          <PageRoute />
        </div>
      </Router>
    </div>
    
  );

};

export default App;
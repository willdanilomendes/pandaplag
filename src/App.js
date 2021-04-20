import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import { GlobalStyles } from './assets/styles/GlobalStyles';

/* PAGINAS */
import Home from './pages/Home'
// import Contato from './pages/Contato'

function App() {
  return (
   <Router>
     <Route exact path="/" component={Home} />
     {/* <Route exact path="/contato" component={Contato} /> */}
     <GlobalStyles/>
   </Router>
  );
}

export default App;
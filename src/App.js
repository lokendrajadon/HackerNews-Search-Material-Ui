import { Container } from '@material-ui/core';
// import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Listing from './components/Listing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { useGlobalContext } from './Context'
function App() {
  return (
    <>
      <Container>
        <Header />
        
        <Footer />
      </Container>
    </>
  );
}

export default App;

import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';


function App() {
  return(
    <div>
      <Header/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App;
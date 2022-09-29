import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css';
import Contentsection from './components/Contentsection/Contentsection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="App">
      <Header></Header>
      <Contentsection></Contentsection>
      <Footer></Footer>
      
    </div>
  );
}

export default App;

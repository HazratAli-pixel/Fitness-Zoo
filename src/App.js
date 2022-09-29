import './App.css';
import Contentsection from './components/Contentsection/Contentsection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Contentsection></Contentsection>
      <Footer></Footer>
    </div>
  );
}

export default App;

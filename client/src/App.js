import './App.css';
import './comps/gridStyle.css'
import Footer from './comps/footer/Footer';
import Header from './comps/header/Header';
import Main from './comps/main/Main';



function App() {
  //Hard coding cows for right now
  

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

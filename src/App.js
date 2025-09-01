import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Page/Home';


function App() {
  return (
    <div className="App">
     
       <Navbar/>
       <main>
        <Home/>
       </main>
      
       </div>
  );
}

export default App;

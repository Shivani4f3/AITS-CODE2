import logo from './logo.svg';
import './App.css';
import './css/custom.css';
import Navbar from'./components/Navbar';
import Sidebar from'./components/Sidebar';
import Content from'./components/Content';

function App(){
  return (
    <div className="App">
      <div>
         <Navbar/>
         <Content/>
         <Sidebar/>
       </div>
      </div>
  
  );
}

export default App;

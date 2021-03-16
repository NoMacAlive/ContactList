import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

//components
import Contact from './components/contact.jsx'
import Header from './components/header.jsx'

function App() {
  return (
    <div className="App">
          <Header></Header>
          <Contact></Contact>
    </div>
  );
}

export default App;

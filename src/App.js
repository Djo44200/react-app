import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header.js';
import { Body } from './containers/Body.js';

const App = () => {
  const appStyle = {
    textAlign: 'center',
    height:'100%',
    width:'100%',
  };
  return (
    <div className="App" style={appStyle}>
        <Header name="Sarah" />
        <Body />
    </div>
  );
}

export default App;

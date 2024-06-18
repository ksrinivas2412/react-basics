import './App.css';
import CakeComponent from './components/CakeComponent';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store= {store}>
    <div>
      <CakeComponent></CakeComponent>
    </div>
    </Provider>
  );
}

export default App;

import './App.css';
import Router from './routes/index'
import store from './configs/redux/index'
import {Provider} from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router/>
      </Provider>
    </div>
  );
}

export default App;

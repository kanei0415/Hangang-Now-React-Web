import RootNavigationContainer from '@routes/containers/RootNavigationContainer';
import rootReducer from '@store/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import '@styles/core.css';

export const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootNavigationContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

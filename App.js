import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import store from './src/redux/store';
import { RecordScreen } from "./src/screens"

const App = (props) => {

  useEffect(() => {
    if (!__DEV__) {
      console.log = () => { };
    }
  }, []);

  return (
    <Provider store={store}>
      <RecordScreen />
      <FlashMessage
        position="top"
        animated={true}
      />
    </Provider>
  )
}

export default App;

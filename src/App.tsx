import React from "react";
import Wrapper from "./Wrapper";
import { Provider } from "react-redux";
import { store } from "./app/store";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
}

export default App;

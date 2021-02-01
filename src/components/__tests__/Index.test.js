import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import React from "react";
import { shallow } from "enzyme";

import App from "../../App";

const mockStore = configureStore();
const state = {};
let store = mockStore(state);

test("renders without crashing", () => {
  shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
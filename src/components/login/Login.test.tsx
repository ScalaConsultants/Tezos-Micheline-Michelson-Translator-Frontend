import React from "react";
import { mount } from "enzyme/build";
import { StoreContext } from "redux-react-hook";
import Login from './Login';

import configureStore from "../../store/index";
import rootSaga from "../../store/saga";

const store = configureStore();
store.runSaga(rootSaga);

describe("Login", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <StoreContext.Provider value={store}>
                <Login />
            </StoreContext.Provider>,
        );
    });

    it("matches snapshot", () => {
        expect(wrapper.debug()).toMatchSnapshot();
    })
})
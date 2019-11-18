import React from "react";
import { mount, shallow } from "enzyme/build";
import { StoreContext } from "redux-react-hook";
import ContactForm from "./ContactForm";

import configureStore from "../../store/index";
import rootSaga from "../../store/saga";

const store = configureStore();
store.runSaga(rootSaga);

describe("ContactForm", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <StoreContext.Provider value={store}>
                <ContactForm setShowModal={() => { }} />
            </StoreContext.Provider>,
        );
    });

    it("matches snapshot", () => {
        expect(wrapper.debug()).toMatchSnapshot();
    });
});
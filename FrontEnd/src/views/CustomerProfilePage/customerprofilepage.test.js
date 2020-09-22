import React from "react";
import sinon from 'sinon';
import CustomerProfilePage from "./CustomerProfilePage";
import { shallow, mount, render } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ExpansionPanelActions } from "@material-ui/core";

Enzyme.configure({ adapter: new Adapter() });

describe("<CustomerProfilePage /> component Unit Test", () => {
    const mockFn = jest.fn();
    const clickFn = jest.fn();

    const props = {
        handleSubmit: mockFn,
        name: "test_name",
        username: "test_username",
        email: "test_email",
        address: "test_address",
        phone: "test_phone",
        button: "button"
    };
/*     it("should render 1 <CustomerProfilePage /> component name", ()=>{
        const component = shallow(<CustomerProfilePage {...props} />);
        expect(component).toHaveLength(1);
        //console.log(component.props());
    }); */

    it("should render 1 <CustomerProfilePage /> button", ()=>{
        const wrapper = shallow(<CustomerProfilePage />);
        const button = wrapper.find('button');
        button.exists('button');
        console.log(wrapper.props());
    });

    it("should render 1 <CustomerProfilePage /> button", ()=>{
        const wrapper = mount((<CustomerProfilePage onButtonClick={onButtonClick} />);
        wrapper.find('button').simulate('click');
        ExpansionPanelActions(onButtonClick).to.have.property('callCount', 1);
        console.log(wrapper.props());
    });

})
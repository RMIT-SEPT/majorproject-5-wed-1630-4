import React from "react";
import Signup from "./SignupPage";
import SignupParent from "./SignupParent";

import {shallow, mount} from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as api from "utils/api.js";

global.fetch = jest.fn(()=>
Promise.resolve({ id: 0 }, {error: none}),
);

const simulateChangeOnInput = (wrapper, inputSelector, newValue)=>{
    let input=wrapper.find(inputSelector)
    input.simulate('change', {
        target:{value: newValue}
    })
    return wrapper.find(inputSelector)
}
Enzyme.configure({ adapter: new Adapter() });

describe("Siginup Page Unit Test", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Signup />)
        jest.resetAllMocks()
    });

    //test page renders
    it("should renders", ()=>{
        expect(wrapper).not.toBeNull;
    });

    //test empty fields are not accepted
    it("should display all fields are required when submit with blank fields", ()=>{
        console.log(wrapper.debug());
        wrapper.find('form').simulate('handleSubmit')
        const alertText = wrapper.find('p')
        expect(alertText.text()).toBe('all fields are required*');
    });

    it("should sumbit form to valid api", ()=>{
        jest.spyOn(SignupParent, 'handleSubmit').mockImplementation(()=> Promise.resolve({id: 0}))
        const updatedUsername = simulateChangeOnInput(wrapper, '#username', 'big wall of china')
        const updatedPhone = simulateChangeOnInput(wrapper, '#phone', '78457845')
        const updatedAdress = simulateChangeOnInput(wrapper, '#address', 'big wall of china')
        const updatedName = simulateChangeOnInput(wrapper, '#name', 'big wall of china')
        const updatedPassword = simulateChangeOnInput(wrapper, '#password', 'big wall of china')
        
        wrapper.find('Form').simulate('Button', {
            preventDefault: () => {},
        })
        expect(SignupParent.handleSumbit).toHaveBeenCalledWith(
            'big wall of china',
            'big wall of china',
            'big wall of china',
            '78457845',
            'big wall of china',
        );
    });

    // it("should display Password should have at least 6 characters",()=>{

    // });

    //test successful sign in
    it("should display successful Sign in", ()=>{
        console.log(wrapper.debug());
        
        const updatedUsername = simulateChangeOnInput(wrapper, '#username', 'big wall of china')
        const updatedPhone = simulateChangeOnInput(wrapper, '#phone', '78457845')
        const updatedAdress = simulateChangeOnInput(wrapper, '#address', 'big wall of china')
        const updatedName = simulateChangeOnInput(wrapper, '#name', 'big wall of china')
        const updatedPassword = simulateChangeOnInput(wrapper, '#password', 'big wall of china')
        
        //check error message
        wrapper.find('ForwardRef').simulate('click')
        const alertText = wrapper.find('h3')
        expect(alertText.text()).toBe('Successful Sign in');
    });


    it("should give error for repeated usernmae", ()=>{
        const updatedUsername = simulateChangeOnInput(wrapper, '#username', 'big wall of china')
        const updatedPhone = simulateChangeOnInput(wrapper, '#phone', '78457845')
        const updatedAdress = simulateChangeOnInput(wrapper, '#address', 'big wall of china')
        const updatedName = simulateChangeOnInput(wrapper, '#name', 'big wall of china')
        const updatedPassword = simulateChangeOnInput(wrapper, '#password', 'big wall of china')
        
        wrapper.find('ForwardRef').simulate('click')
        const alertText = wrapper.find('h3')
        expect(alertText.text()).toBe('repeated Username');

    });

    it("should display error for username not less than length of 4", ()=>{
        const updatedUsername = simulateChangeOnInput(wrapper, '#username', 'ew')
        const updatedPhone = simulateChangeOnInput(wrapper, '#phone', '78457845')
        const updatedAdress = simulateChangeOnInput(wrapper, '#address', 'big wall of china')
        const updatedName = simulateChangeOnInput(wrapper, '#name', 'big wall of china')
        const updatedPassword = simulateChangeOnInput(wrapper, '#password', 'big wall of china')
        
        wrapper.find('ForwardRef').simulate('click')
        const alertText = wrapper.find('h3')

        //should display this error message
        expect(alertText.text()).toBe('username size no less than 4*');

    });



})

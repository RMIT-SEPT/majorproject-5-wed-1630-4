import React from "react";
import Signup from "./SignupPage";
import {shallow, mount} from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CustomInput from "components/CustomInput/CustomInput";

Enzyme.configure({ adapter: new Adapter() });

describe("Siginup Page Unit Test", () => {
    // const summitClicked = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Signup />)
    });

    //test page renders
    it("should renders", ()=>{
        expect(wrapper).not.toBeNull;
    });

    //test empty fields are not accepted
    it("should display all fields are required when submit with blank fields", ()=>{
        wrapper.find('ForwardRef').simulate('click')
        const alertText = wrapper.find('h3')
        expect(alertText.text()).toBe('all fields are required*');
    });

    //test successful sign in
    it("should display successful Sign in", ()=>{
        console.log(wrapper.debug());
        
        //input data into text fields
        let nameInput = wrapper.find ('#name')
        let userNameInput = wrapper.find ('#username')
        let passowrdInput = wrapper.find ('#password')
        let phoneInput = wrapper.find ('#phone')
        let addressInput = wrapper.find ('#address')

        nameInput.simulate('change',{
            target: {value: 'BlueBrickWall'},
        }),
        userNameInput.simulate('change',{
            target: {value: 'BlueBrickWall'},
        }),
        passowrdInput.simulate('change',{
            target: {value: 'BlueBrickWall'},
        }),
        phoneInput.simulate('change',{
            target: {value: 1234556},
        }),
        addressInput.simulate('change',{
            target: {value: '123 BlueBrickStreet'},
        }),
        
        
        nameInput = wrapper.find ('#name')
        userNameInput = wrapper.find ('#username')
        passowrdInput = wrapper.find ('#password')
        phoneInput = wrapper.find ('#phone')
        addressInput = wrapper.find ('#address')

        //check error message
        wrapper.find('ForwardRef').simulate('click')
        const alertText = wrapper.find('h3')
        expect(alertText.text()).toBe('Successful Sign in');
    });


    it("should give error for repeated usernmae", ()=>{
        let nameInput = wrapper.find ('#name')
        let userNameInput = wrapper.find ('#username')
        let passowrdInput = wrapper.find ('#password')
        let phoneInput = wrapper.find ('#phone')
        let addressInput = wrapper.find ('#address')

        nameInput.simulate('change',{
            target: {value: 'BlueBrickWall'},
        }),
        userNameInput.simulate('change',{
            target: {value: 'BlueBrickWall'},
        }),
        passowrdInput.simulate('change',{
            target: {value: 'BlueBrickWall'},
        }),
        phoneInput.simulate('change',{
            target: {value: 1234556},
        }),
        addressInput.simulate('change',{
            target: {value: '123 BlueBrickStreet'},
        }),
        
        
        nameInput = wrapper.find ('#name')
        userNameInput = wrapper.find ('#username')
        passowrdInput = wrapper.find ('#password')
        phoneInput = wrapper.find ('#phone')
        addressInput = wrapper.find ('#address')

        wrapper.find('ForwardRef').simulate('click')
        const alertText = wrapper.find('h3')
        expect(alertText.text()).toBe('repeated Username');

    });

    it("should display error for username not less than length of 3", ()=>{
        let nameInput = wrapper.find ('#name')
        let userNameInput = wrapper.find ('#username')
        let passowrdInput = wrapper.find ('#password')
        let phoneInput = wrapper.find ('#phone')
        let addressInput = wrapper.find ('#address')

        nameInput.simulate('change',{
            target: {value: 'BlueBrickWall'},
        }),
        userNameInput.simulate('change',{
            target: {value: 'em'},
        }),
        passowrdInput.simulate('change',{
            target: {value: 'BlueBrickWall'},
        }),
        phoneInput.simulate('change',{
            target: {value: 1234556},
        }),
        addressInput.simulate('change',{
            target: {value: '123 BlueBrickStreet'},
        }),
        
        nameInput = wrapper.find ('#name')
        userNameInput = wrapper.find ('#username')
        passowrdInput = wrapper.find ('#password')
        phoneInput = wrapper.find ('#phone')
        addressInput = wrapper.find ('#address')

        wrapper.find('ForwardRef').simulate('click')
        const alertText = wrapper.find('h3')
        expect(alertText.text()).toBe('username size no less than 3*');

    });



})

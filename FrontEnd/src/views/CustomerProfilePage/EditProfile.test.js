import React from "react";
import EditPage from "./EditProfileParent";
import {shallow, mount} from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Api from "utils/api.js";

const simulateChangeOnInput = (wrapper, inputSelector, newValue)=>{
    let input=wrapper.find(inputSelector)
    input.simulate('change', {
        target:{value: newValue}
    })
    return wrapper.find(inputSelector)
}
Enzyme.configure({ adapter: new Adapter() });

describe("Edit Profile Page Unit Test", () => {
    const mockFn = jest.fn();
    let wrapper;
    beforeEach(() => {
        jest.resetAllMocks()
        Api.login({
            "username": "The Great Wall",
            "password": "The Great Wall",
          },
          (res) => {
            console.log(res);
            this.setState({errors: res.errors})
          }
        );
    
        wrapper = shallow(<EditPage />)
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

    it("should display Password should have at least 6 characters",()=>{

    });

    it("should sumbut to API"), () => {
        jest.spyOn(api, 'edu')
    }

    //test successful update
    it("should update", ()=>{
        console.log(wrapper.debug());
        
        //input data into text fields
        const updatedUsername = simulateChangeOnInput(wrapper, '#username', 'big wall of china')
        const updatedPhone = simulateChangeOnInput(wrapper, '#phone', 'big wall of china')
        const updatedAdress = simulateChangeOnInput(wrapper, '#address', 'big wall of china')

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

        //username length less than 3
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

        //should display this error message
        expect(alertText.text()).toBe('username size no less than 3*');

    });



})

import React from "react";
import Todo from "./LoginPage";
import {shallow, mount} from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Todo /> component Unit Test", () => {
    const mockFn = jest.fn();
    const props = {
        onClick: mockFn,
        completed: false,
        text: "buy milk"
    };
    it("should render 1 <Todo /> component", ()=>{
        const component = shallow(<Todo {...props} />);
        expect(component).toHaveLength(1);
        console.log(component.props());
    });

})

import React from "react";
import AdminProfilePage from "./AdminProfilePage";
import {mount, shallow} from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<AdminProfilePage /> component Unit Test", () => {
    const mockFn = jest.fn();
    const props = {
        handleSubmit: mockFn,
        username: "test_username",
        password: "test_password"
    };
    it("should render 1 <AdminProfilePage /> component", ()=>{
        //const component = shallow(<Todo {...props} />);
        const component = shallow(<AdminProfilePage {...props} />);
        expect(component).toHaveLength(1);
        console.log(component.props());
    });

})
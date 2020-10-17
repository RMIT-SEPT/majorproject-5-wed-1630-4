import React from "react";
import BookingPage from "./MakeBookingPage";
import SectionBookingComponent from "./Sections/SectionBookingComponent";
import SectionBooking from "./Sections/SectionBooking";
import {act} from "react-dom/test-utils";
import {mount, shallow} from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<MakeBookingPage /> component Unit Test", () => {
    let component;
    beforeEach(() => {
        jest.mock('axios');
        const mockAxios = require("axios")
    
      act(() => {
        mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve([
            {
                id: 1,
                service: 'Hair',
                employee: 'The Great Employee',
                status: 'OPEN',
                dateTime: '12/12/12'
            },
            {
                id: 2,
                service: 'Hair',
                employee: 'The Great Employee',
                status: 'OPEN',
                dateTime: '12/12/12'
            },
            {
                id: 3,
                service: 'Hair',
                employee: 'The Great Employee',
                status: 'OPEN',
                dateTime: '12/12/12'
            }
            ])
      );
        component = mount(<SectionBooking />)

      });
        component = mount(<SectionBooking />)
        jest.resetAllMocks()
    });

    it("should render 1 <MakeBookingPage /> component", ()=>{
        expect(component).toHaveLength(1);
        console.log(component.debug());
    });
    it("should fetch bookings", () => {
      const findBookings = require('./Sections/SectionBooking');

        return findBookings.fetchBookings().then(response => {
            expect(response).toEqual();
    //     // const {getByTestId} = render(<BookingSection />)
    //     // expect(getByTestId("booking_id")).toHaveTextContent("hair hair 1 10/22/20 ope")
    //     const expected = [ 
    //         '<li key={booking.id}> <label>{booking.description} {booking.service} {booking.worker} {booking.dateTime} {booking.status}</label><Button round color="primary" size="sm" onClick={() => handleClick(booking.id)}>BOOK</Button></li>', 
    //         '<li key={booking.id}> <label>{booking.description} {booking.service} {booking.worker} {booking.dateTime} {booking.status}</label><Button round color="primary" size="sm" onClick={() => handleClick(booking.id)}>BOOK</Button></li>'
    //       ]
        
    //     const result = component
    //         .instance()
    //         .displayBooking()
    //         .map(point => {
    //             return mount(point).html();
    //         });
    //     console.log(result);
    //     expect(result).toEqual(expected);

    });
});
    // it("should make booking successfully", async ()=>{
    //     const bookingText = component.find('ForwardRef(Grid)')
    //     expect(bookingText).toHaveLength(2);
    // });
    // it("should make booking unsuccessfully", async ()=>{
    //     const getBookingTexts = require('./MakeBookingPage/Sections');
    //     const bookingText = await getBookingTexts()
    //     expect(bookingText).toHaveLength(2);
    // });
})

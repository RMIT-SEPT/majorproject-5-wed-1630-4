package au.edu.rmit.septagme.controllers;

@Controller
@RequestMapping(value="/bookings")
@SessionAttributes("booking","worker","service")
public class BookingController{
    @Autowired
    BookingRepository bookings;
}
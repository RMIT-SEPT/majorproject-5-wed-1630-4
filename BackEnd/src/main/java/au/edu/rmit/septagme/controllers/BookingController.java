package au.edu.rmit.septagme.controllers;

@Controller
@RequestMapping(value="/bookings")
@SessionAttributes("booking","worker","service")
public class BookingController{
    @Autowired
    BookingRepository bookings;

    @Autowired
    UserRepository customer;

    @RequestMapping(methods=RequestMethod.GET)
    public String index(Model model){
        UserEntity customer = getCustomer();
        List<Booking> bookings = new ArrayList<booking>();
        Iterator<Booking> it = bookings.findAll().iterator();
        while(it.hasNext()){
            Booking book = it.next();
            if(book.getBooking.getId())==user.getId()){
                books.add(book);
            }
        }
        model.addAttribute("bookings", books);
        return "bookings/index";
    }

}
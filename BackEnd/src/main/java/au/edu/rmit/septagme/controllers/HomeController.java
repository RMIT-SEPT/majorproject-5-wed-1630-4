package au.edu.rmit.septagme.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@RequestMapping("/")
	public String index() {
		return "index";
	}
//    @GetMapping("/")
//    public String home(){
//        return "home";
//    }

    @GetMapping("/customer_dashboard")
    public String customer_dashboard(){
        return "dashboard";
    }

    @GetMapping("/admin_dashboard")
    public String admin_dashboard(){
        return "dashboard";
    }

    @GetMapping("/worker_dashboard")
    public String worker_dashboard(){
        return "dashboard";
    }
}

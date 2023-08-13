package com.home.rpg;

// import org.springframework.stereotype.Controller; // Controller is used for rendering a View
import org.springframework.web.bind.annotation.RestController; // RestController is used for JSON
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import java.util.LinkedList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RpgController {
	private final EmployeeRepository repository;

	public RpgController(EmployeeRepository repository) {
		this.repository = repository;
  	}

	@RequestMapping(value = "/api/employees")
	public List<Employee> getEmployees() {
		List<Employee> list = new LinkedList<Employee>();
		for (Employee e : repository.findAll()) {
			list.add(e);
		}
		return list;
	}
}
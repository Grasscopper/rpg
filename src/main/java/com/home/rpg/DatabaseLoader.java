package com.home.rpg;

import com.home.rpg.Employee;
import com.home.rpg.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final EmployeeRepository repository;

	@Autowired
	public DatabaseLoader(EmployeeRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Employee("Spike", "Spiegel", "Bounty Hunter"));
		this.repository.save(new Employee("Yuma", "Kokohead", "Detective"));
		this.repository.save(new Employee("Joel", "Miller", "Survivor"));
	}
}
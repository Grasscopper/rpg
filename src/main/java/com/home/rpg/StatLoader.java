package com.home.rpg;

import com.home.rpg.Stat;
import com.home.rpg.StatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StatLoader implements CommandLineRunner {

	private final StatRepository repository;

	@Autowired
	public StatLoader(StatRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Stat(
            "Strength",
            "Increase bench press by 5 pounds.",
            1,
            100.00f,
            200.00f
        ));
	}
}
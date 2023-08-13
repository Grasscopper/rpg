package com.home.rpg;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import java.util.LinkedList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StatController {
	private final StatRepository repository;

	public StatController(StatRepository repository) {
		this.repository = repository;
  	}

	@RequestMapping(value = "/api/stats")
	public List<Stat> getStats() {
		List<Stat> list = new LinkedList<Stat>();
		for (Stat e : repository.findAll()) {
			list.add(e);
		}
		return list;
	}
}
package com.home.rpg;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import java.util.LinkedList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EnemyController {
	private final EnemyRepository repository;

	public EnemyController(EnemyRepository repository) {
		this.repository = repository;
  	}

	@RequestMapping(value = "/api/enemies")
	public List<Enemy> getEnemys() {
		List<Enemy> list = new LinkedList<Enemy>();
		for (Enemy e : repository.findAll()) {
			list.add(e);
		}
		return list;
	}
}